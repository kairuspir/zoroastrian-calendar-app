import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import * as FirebaseFirestore from "nativescript-plugin-firebase/app"
import { BackendService } from "./services";
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        firebase.init({
            persist: true,
            storageBucket: "gs://zoroastrian-calendar-project.appspot.com"
        }).then(
            instance => {
                console.log("firebase.init done");
                FirebaseFirestore.firestore().collection("settings").doc("lastUpdated").get().then(doc => {
                    if (doc.exists) {
                        var serverLastUpdatedDate = new Date(doc.data().value)
                        if (BackendService.cloudFirestoreLastUpdatedDate < serverLastUpdatedDate) {
                            console.log(`Document data: ${JSON.stringify(doc.data())}, device data: ${JSON.stringify(BackendService.cloudFirestoreLastUpdatedDate)}`);
                        }

                    } else {
                        console.log("lastUpdated document not found on firestore");
                    }
                });
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );

    }
}
