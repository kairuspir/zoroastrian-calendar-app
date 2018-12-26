import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";

import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule
    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule { }