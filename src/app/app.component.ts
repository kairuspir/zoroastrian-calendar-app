import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import { FirebaseService } from "./services";
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor(protected firebaseService: FirebaseService) {
    }
    ngOnInit(): void {
        firebase.init({
            persist: true,
            storageBucket: "gs://zoroastrian-calendar-project.appspot.com"
        }).then(
            instance => {
                console.log("firebase.init done");
                this.firebaseService.loadDefaultCalendarEvents();
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );

    }
}
