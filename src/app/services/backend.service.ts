import { Injectable } from "@angular/core";
import { getString, setString, getNumber, setNumber, hasKey } from "application-settings";

const tokenKey = "token";
const cloudFirestoreLastUpdatedKey = "firebaseLastUpdatedKey";

@Injectable()
export class BackendService {

    static isLoggedIn(): boolean {
        return !!getString(tokenKey);
    }

    static get token(): string {
        return getString(tokenKey);
    }

    static set token(theToken: string) {
        setString(tokenKey, theToken);
    }

    static get cloudFirestoreLastUpdatedDate(): Date {
        if (hasKey(cloudFirestoreLastUpdatedKey) == false) {
            setNumber(cloudFirestoreLastUpdatedKey, 0);
        }
        return new Date(getNumber(cloudFirestoreLastUpdatedKey));
    }

    static set cloudFirestoreLastUpdatedDate(updatedDate: Date) {
        setNumber(cloudFirestoreLastUpdatedKey, updatedDate.valueOf());
    }
}