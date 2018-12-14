import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular"

import { AppRoutingModule, authProviders } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { CalendarMonthViewComponent } from "./calendar/calendar.month-view.component";
import { ShowSelectedDateComponent } from "./calendar/calendar.show-selected-date.component";
import { LoginModule } from "./login/login.module";
import { BackendService, FirebaseService, UtilsService } from "./services";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUICalendarModule,
        AppRoutingModule,
        LoginModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        CalendarMonthViewComponent,
        ShowSelectedDateComponent
    ],
    providers: [authProviders, BackendService, FirebaseService, UtilsService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
