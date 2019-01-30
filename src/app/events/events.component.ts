import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "~/app/shared/base.component";
import { FirebaseLocalStoreService, EventsBusinessService, CalendarDataService } from "~/app/services";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as _ from "lodash";
import { ZFirestoreEvent } from "../models";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

enum SortingOrder {
    NSOrderedAscending = -1,
    NSOrderedSame = 0,
    NSOrderedDescending = 1
}
@Component({
    selector: "ns-app-events",
    moduleId: module.id,
    templateUrl: "./events.component.html"
})
export class EventsComponent extends BaseComponent implements OnInit {
    firestoreEvents$: Observable<Array<any>>;
    constructor(
        protected firebaseService: FirebaseLocalStoreService,
        private eventService: EventsBusinessService,
        private calendarDataService: CalendarDataService
    ) {

        super();
    }
    ngOnInit() {
        this.firestoreEvents$ = this.eventService.getAllFirestoreEvents()
            .pipe(
                map(value => {
                    var result = _(value)
                        .groupBy((item) => { return item.mahId; })
                        .map((monthEvents, mahId) => ({
                            monthName: this.monthName(Number(mahId)),
                            mahId,
                            monthEvents: _(monthEvents)
                                .groupBy((item) => { return item.rojId; })
                                .map((dayEvents, rojId) => ({
                                    rojName: this.rojName(Number(rojId)),
                                    rojId,
                                    dayEvents
                                }))
                                .value()
                        }))
                        //.tap((item) => console.log(item))
                        .value();
                    return result;
                })
            );
    }
    @ViewChild("eventListView") eventListViewComponent: RadListViewComponent;
    monthName(mahId: number) {
        return this.calendarDataService.getMahNameById(mahId);
    }
    rojName(rojId: number) {
        return this.calendarDataService.getRojNameById(rojId);
    }
    refreshFirestore() {
        this.firebaseService.forceRefreshStore();
    }
}