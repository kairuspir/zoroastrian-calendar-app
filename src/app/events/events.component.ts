import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "~/app/shared/base.component";
import { FirebaseLocalStoreService, EventsBusinessService } from "~/app/services";
import { Observable } from "rxjs";

@Component({
    selector: "ns-app-admin-events",
    moduleId: module.id,
    templateUrl: "./events.component.html"
})
export class EventsComponent extends BaseComponent implements OnInit {
    firestoreEvents$: Observable<Array<string>>;
    constructor(
        protected firebaseService: FirebaseLocalStoreService,
        private eventService: EventsBusinessService,
    ) {

        super()
    }
    ngOnInit() {
        this.firestoreEvents$ = this.eventService.getAllFirestoreEvents();
    }

    refreshFirestore() {
        this.firebaseService.forceRefreshStore();
    }
}