import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import { FirebaseLocalStoreService } from "./services";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { Router, NavigationEnd } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import { filter } from "rxjs/operators";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        protected firebaseService: FirebaseLocalStoreService,
        private router: Router,
        private routerExtensions: RouterExtensions
    ) { }
    ngOnInit(): void {
        this.initFireBase();

        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

    }

    private initFireBase() {
        return firebase.init({
            persist: true,
            storageBucket: "gs://zoroastrian-calendar-project.appspot.com"
        }).then(instance => {
            console.log("firebase.init done");
            this.firebaseService.refreshStore();
        }, error => {
            console.log(`firebase.init error: ${error}`);
        });
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
