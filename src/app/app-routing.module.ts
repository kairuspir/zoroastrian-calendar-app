import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "~/app/services";

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },

    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule", canActivate: [AuthGuard] },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule", canActivate: [AuthGuard] },
    { path: "profile", loadChildren: "~/app/profile/profile.module#ProfileModule", canActivate: [AuthGuard] },

    { path: "**", component: PageNotFoundComponent }

];

export const authProviders = [AuthGuard];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes),
        SharedModule.forRoot()
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }