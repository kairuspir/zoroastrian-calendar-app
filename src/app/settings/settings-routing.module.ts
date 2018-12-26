import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "~/app/services";
import { SettingsComponent } from "./settings.component";

const settingsRoutes: Routes = [
    { path: "", component: SettingsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(settingsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SettingsRoutingModule { }