import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { CalendarMonthViewComponent } from "./calendar/calendar.month-view.component";

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "", redirectTo: "/monthView", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
    { path: "monthView", component: CalendarMonthViewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }