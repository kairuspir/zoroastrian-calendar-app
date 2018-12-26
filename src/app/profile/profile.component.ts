import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "~/app/services";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../shared/base.component";

@Component({
    selector: "ns-app-admin-profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent extends BaseComponent implements OnInit {

    constructor(
        private firebaseService: FirebaseService,
        private routerExtensions: RouterExtensions
    ) {
        super();
    }

    ngOnInit() { }

    logout() {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}