import { NgModule } from "@angular/core";
import { EventsComponent } from "./events.component";
import { EventsRoutingModule } from "./events-routing.module";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        EventsRoutingModule
    ],
    declarations: [
        EventsComponent
    ]
})
export class EventsModule { }