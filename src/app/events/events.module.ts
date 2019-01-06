import { NgModule } from "@angular/core";
import { EventsComponent } from "./events.component";
import { EventsRoutingModule } from "./events-routing.module";

import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EventsRoutingModule
    ],
    declarations: [
        EventsComponent
    ]
})
export class EventsModule { }