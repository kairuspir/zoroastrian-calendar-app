import { Injectable, NgZone } from "@angular/core";
import { ApplicationStorageService, FirebaseService } from "~/app/services";
import { BehaviorSubject, Observable } from "rxjs";
import { ZFirestoreEvent } from "~/app/models";
import * as couchbaseModule from "nativescript-couchbase"

@Injectable({
    providedIn: "root"
})
export class FirebaseLocalStoreService {
    _defaultCalendarEvents: BehaviorSubject<Array<ZFirestoreEvent>>
    _db: couchbaseModule.Couchbase;
    constructor(
        private appStore: ApplicationStorageService,
        private fireStore: FirebaseService
    ) {
        this._defaultCalendarEvents = new BehaviorSubject([]);
        this.initDb();
        this.loadSubjectFromDb();
    }

    get defaultCalendarEvents(): Observable<Array<ZFirestoreEvent>> {
        return this._defaultCalendarEvents.asObservable();
    }

    refreshStore() {
        this.fireStore.getLastUpdatedDate().then(serverDate => {
            var serverDateValue = serverDate.valueOf();
            var localDateValue = new Date(this.appStore.lastUpdatedString).valueOf()

            if (localDateValue < serverDateValue) {
                this._db.destroyDatabase();
                this.initDb();
                console.log("Updating firebase local store");
                this.fireStore.loadDefaultCalendarEvents()
                    .then(events => {
                        events.forEach(event => {
                            this._db.createDocument(event, event.title);
                        });
                        return events;
                    })
                    .then(events => {
                        this._defaultCalendarEvents.next(events);
                    }).then(() => {
                        this.appStore.lastUpdatedString = serverDate.toISOString();
                    });

            }
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