import { Injectable } from "@angular/core";
import { ApplicationStorageService, FirebaseService } from "~/app/services";
import { User } from "~/app/models";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    redirectUrl: string;
    constructor(
        private firebaseService: FirebaseService,
        private appStore: ApplicationStorageService,
    ) { }
    isLoggedIn(): boolean {
        return this.appStore.isTokenSet();
    }

    login(user: User) {
        return this.firebaseService.login(user).then((user) => {
            this.appStore.token = user.uid;
            return user;
        })
    }
    logout() {
        return this.firebaseService.logout().then(() => {
            this.appStore.token = "";
        });
    }


}