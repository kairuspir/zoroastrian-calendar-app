import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }