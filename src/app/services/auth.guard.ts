import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

import { AuthService } from "~/app/services";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}