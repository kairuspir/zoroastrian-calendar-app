import { Injectable } from "@angular/core";
import * as appSettings from "application-settings";

const tokenKey = "token";
const lastUpdatedKey = "lastUpdated";

@Injectable({
    providedIn: "root"
})
export class ApplicationStorageService {

    isTokenSet(): boolean {
        return !!appSettings.getString(tokenKey);
    }

    get token(): string {
        return appSettings.getString(tokenKey);
    }

    set token(theToken: string) {
        appSettings.setString(tokenKey, theToken);
    }

    get lastUpdatedString(): string {
        if (appSettings.hasKey(lastUpdatedKey) == false) {
            appSettings.setString(lastUpdatedKey, "1970-01-01T00:00:00.000Z");
        }
        return appSettings.getString(lastUpdatedKey);
    }

    set lastUpdatedString(updatedDateString: string) {
        appSettings.setString(lastUpdatedKey, updatedDateString);
    }
}