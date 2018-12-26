import { Component, OnInit, OnDestroy } from "@angular/core";
import { CalendarBusinessService, EventsBusinessService } from "~/app/services";
import { CalendarSelectionEventData, RadCalendar, CalendarEvent, CalendarViewMode, CalendarNavigationEventData, CalendarEventsViewMode } from "nativescript-ui-calendar";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { EventData } from "tns-core-modules/data/observable/observable";
import { Observable, Subscription } from "rxjs";
import { ZDate } from "~/app/models";
import { BaseComponent } from "~/app/shared/base.component";

@Component({
    selector: "ns-app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {
    viewMode: string;
    eventsViewMode: string;
    selectedDate: string;
    zDate: ZDate;
    selectedDayEvents$: Observable<Array<CalendarEvent>>;
    selectedMonthEvents$: Observable<Array<CalendarEvent>>;
    calendarEvents: Array<CalendarEvent>;
    calendarHeight: number;
    subscription: Subscription;
    constructor(
        private calendarService: CalendarBusinessService,
        private eventService: EventsBusinessService,
    ) {
        super();
        this.selectedDayEvents$ = eventService.eventsForDay;
        this.selectedMonthEvents$ = eventService.eventsForMonth;
    }

    ngOnInit(): void {
        this.viewMode = CalendarViewMode.Month;
        this.eventsViewMode = CalendarEventsViewMode.Inline;
        this.calendarHeight = screen.mainScreen.heightDIPs / 3;
        this.selectedDate = new Date().toISOString();
        this.setDate(new Date());
        this.subscription = this.selectedMonthEvents$.subscribe(value => { this.calendarEvents = value; });

        this.eventService.loadEventsForMonth(new Date());
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = args.object;
        this.setDate(args.date);
    }

    setDate(input: Date): void {
        this.zDate = this.calendarService.convertGregorianToShahanshahi(input);
        this.eventService.loadEventsForDay(input);
    }

    onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    onNavigatedToDate(args: CalendarNavigationEventData) {
        this.eventService.loadEventsForMonth(args.date);
    }

    addEvent(args: EventData) {
        var today = new Date();
        var zToday = this.calendarService.convertGregorianToShahanshahi(today);
        var yesterday = new Date();
        yesterday.setHours(-24);
        var zYesterday = this.calendarService.convertGregorianToShahanshahi(yesterday);
        var tomorrow = new Date()
        tomorrow.setHours(24);
        var zTomorrow = this.calendarService.convertGregorianToShahanshahi(tomorrow);
        this.eventService.addEvent(zToday, "today", "");
        this.eventService.addEvent(zYesterday, "yesterday", "");
        this.eventService.addEvent(zTomorrow, "tomorrow", "");
    }

    deleteAllEvents(args: EventData) {
        this.eventService.deleteAllEvents();
    }
}