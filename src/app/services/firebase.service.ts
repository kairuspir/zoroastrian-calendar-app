import { Injectable, NgZone } from "@angular/core";
import { User, ZFirestoreEvent } from "../models";
import { BackendService } from "./backend.service";
import * as firebase from "nativescript-plugin-firebase";
import * as firebaseStorage from "nativescript-plugin-firebase/storage/storage"
import * as firebaseFirestore from "nativescript-plugin-firebase/app"
import { UtilsService } from './utils.service';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class FirebaseService {
    _defaultCalendarEvents: BehaviorSubject<Array<ZFirestoreEvent>>
    constructor(
        private ngZone: NgZone,
        private utils: UtilsService
    ) {
        this._defaultCalendarEvents = new BehaviorSubject([]);
    }

    get defaultCalendarEvents(): Observable<Array<ZFirestoreEvent>> {
        return this._defaultCalendarEvents.asObservable();
    }

    loadDefaultCalendarEvents(): void {
        firebaseFirestore.firestore().collection("defaultCalendarEvents")
            .onSnapshot(snapshot => {
                var events = new Array<ZFirestoreEvent>();
                snapshot.forEach(docSnap => {
                    var event = docSnap.data();
                    events.push(new ZFirestoreEvent(event["rojId"], event["mahId"], event["description"], event["title"]));
                });
                this._defaultCalendarEvents.next(events);
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
        }).then((result: any) => {
            BackendService.token = result.uid;
            return JSON.stringify(result);
        }, (errorMessage: any) => {
            alert(errorMessage);
        });
    }

    logout() {
        BackendService.token = "";
        firebase.logout();
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