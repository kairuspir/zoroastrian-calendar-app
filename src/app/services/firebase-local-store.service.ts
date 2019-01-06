import { Injectable, NgZone } from "@angular/core";
import { ApplicationStorageService, FirebaseService, CalendarDataService } from "~/app/services";
import { BehaviorSubject, Observable } from "rxjs";
import { ZFirestoreEvent } from "~/app/models";
import * as couchbaseModule from "nativescript-couchbase"
import "rxjs/add/operator/share"

@Injectable({
    providedIn: "root"
})
export class FirebaseLocalStoreService {
    _defaultCalendarEvents: BehaviorSubject<Array<ZFirestoreEvent>>
    _db: couchbaseModule.Couchbase;
    constructor(
        private appStore: ApplicationStorageService,
        private fireStore: FirebaseService,
        private calendarDataService: CalendarDataService
    ) {
        this._defaultCalendarEvents = new BehaviorSubject([]);
        this.initDb();
        this.loadSubjectFromDb();
    }

    get defaultCalendarEvents(): Observable<Array<ZFirestoreEvent>> {
        return this._defaultCalendarEvents.asObservable();
    }

    refreshStore() {
        return this.fireStore.getLastUpdatedDate().then(serverDate => {
            var serverDateValue = serverDate.valueOf();
            var localDateValue = new Date(this.appStore.lastUpdatedString).valueOf()

            if (localDateValue < serverDateValue) {
                this.forceRefreshStore()
                    .then(() => {
                        this.appStore.lastUpdatedString = serverDate.toISOString();
                    });;
            }
        });
    }

    forceRefreshStore() {
        this._db.destroyDatabase();
        this.initDb();
        console.log("Updating firebase local store");
        return this.fireStore.loadDefaultCalendarEvents()
            .then(events => {
                events.forEach(event => {
                    event.dayOfYear = this.calendarDataService.getDayInYearByIds(event.rojId, event.mahId);
                    console.log("day of year: " + event.dayOfYear + ", mah:" + event.mahId + ", roj: " + event.rojId + ", title: " + event.title);
                    this._db.createDocument(event, event.title);
                });
                return events;
            })
            .then(events => {
                this._defaultCalendarEvents.next(events);
            });
    }

    private initDb(): void {
        this._db = new couchbaseModule.Couchbase("firebase-local-store");
        this._db.createView("all", "1", (document, emitter) => {
            emitter.emit(document._id, document);
        });
    }

    private loadSubjectFromDb() {
        let rows: Array<ZFirestoreEvent> = this._db.executeQuery("all");
        this._defaultCalendarEvents.next(rows);
    }

}