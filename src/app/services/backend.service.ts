import { Injectable } from "@angular/core";
import { getString, setString, getNumber, setNumber, hasKey } from "application-settings";

const tokenKey = "token";

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
}