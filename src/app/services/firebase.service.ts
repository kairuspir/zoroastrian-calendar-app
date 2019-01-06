import { Injectable, NgZone } from "@angular/core";
import { User, ZFirestoreEvent } from "~/app/models";
import * as firebase from "nativescript-plugin-firebase";
import * as firebaseStorage from "nativescript-plugin-firebase/storage/storage"
import * as firebaseFirestore from "nativescript-plugin-firebase/app"
import { UtilsService } from "~/app/services";

@Injectable({
    providedIn: "root",
})
export class FirebaseService {
    constructor(
        private ngZone: NgZone,
        private utils: UtilsService
    ) { }

    loadDefaultCalendarEvents() {
        return this.getCollection("defaultCalendarEvents")
            .then(snapshot => {
                var events = new Array<ZFirestoreEvent>();
                snapshot.forEach(docSnap => {
                    var event = docSnap.data();
                    events.push(new ZFirestoreEvent(event["rojId"], event["mahId"], event["description"], event["title"], 0));
                });
                return events;
            });
    }

    getLastUpdatedDate() {
        return this.getDocument("settings", "lastUpdated").then(doc => {
            var serverDate = new Date(0);
            if (doc.exists) {
                serverDate = new Date(doc.data().value);
            }
            return serverDate;
        });
    }

    private getDocument(collectionPath: string, documentPath: string) {
        return firebaseFirestore.firestore().collection(collectionPath).doc(documentPath).get().then(doc => {
            var result = this.ngZone.run(() => {
                return doc;
            });
            return result;
        });
    }

    private getCollection(collectionPath: string) {
        return firebaseFirestore.firestore().collection(collectionPath).get().then(snapshot => {
            var result = this.ngZone.run(() => {
                return snapshot;
            });
            return result;
        });
    }

    register(user: User) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(
            function (result: any) {
                return JSON.stringify(result);
            },
            function (errorMessage: any) {
                alert(errorMessage);
            }
        )
    }

    login(user: User) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            },
        }).then(user => {
            var result = this.ngZone.run(() => {
                return user;
            });
            return result;
        });
    }

    logout() {
        return firebase.logout().then(() => {
            this.ngZone.run(() => { });
        });
    }

    resetPassword(email) {
        return firebase.resetPassword({
            email: email
        }).then((result: any) => {
            alert(JSON.stringify(result));
        },
            function (errorMessage: any) {
                alert(errorMessage);
            }
        ).catch(this.handleErrors);
    }

    uploadFile(localPath: string, file?: any): Promise<any> {
        let filename = this.utils.getFilename(localPath);
        let remotePath = `${filename}`;
        return firebaseStorage.uploadFile({
            remoteFullPath: remotePath,
            localFullPath: localPath,
            onProgress: function (status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
        });
    }

    getDownloadUrl(remoteFilePath: string): Promise<any> {
        return firebaseStorage.getDownloadUrl({
            remoteFullPath: remoteFilePath
        })
            .then(
                function (url: string) {
                    return url;
                },
                function (errorMessage: any) {
                    console.log(errorMessage);
                });
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    }
}