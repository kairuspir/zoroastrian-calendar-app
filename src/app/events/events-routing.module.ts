import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "~/app/services";
import { EventsComponent } from "./events.component";

const eventsRoutes: Routes = [
    { path: "", component: EventsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(eventsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EventsRoutingModule { }