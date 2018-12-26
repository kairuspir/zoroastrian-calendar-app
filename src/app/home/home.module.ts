import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ShowSelectedDateComponent } from "./selected-date.component";

import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        ShowSelectedDateComponent,
        HomeComponent
    ]
})
export class HomeModule { }