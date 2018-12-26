import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }