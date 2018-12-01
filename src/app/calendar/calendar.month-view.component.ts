import { Component, OnInit } from "@angular/core";
import { CalendarBusinessService } from "./calendar.business.service";
import { CalendarSelectionEventData, RadCalendar, CalendarEvent, CalendarViewMode, CalendarNavigationEventData } from "nativescript-ui-calendar";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { ZDate } from "./calendar.models";
import { EventData } from "tns-core-modules/data/observable/observable";
import { EventsBusinessService } from "../events/events.business.service";

@Component({
    selector: "cal-month-view",
    moduleId: module.id,
    templateUrl: "./calendar.month-view.component.html",
})
export class CalendarMonthViewComponent implements OnInit {
    viewMode: string;
    selectedDate: string;
    zDate: ZDate;
    selectedDayEvents: Array<CalendarEvent>;
    calendarEvents: Array<CalendarEvent>;
    calendarHeight: number;
    constructor(private calendarService: CalendarBusinessService, private eventService: EventsBusinessService) {
    }

    ngOnInit(): void {
        this.viewMode = CalendarViewMode.Month;
        this.calendarHeight = screen.mainScreen.heightDIPs / 2;
        this.selectedDate = new Date().toISOString();
        this.setDate(new Date());
    }

    onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = args.object;
        this.setDate(args.date);
    }

    setDate(input: Date): void {
        this.zDate = this.calendarService.convertGregorianToShahanshahi(input);
        this.eventService.getEventsForDay(input).then(value => {
            this.selectedDayEvents = value;
        });
    }

    onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    onNavigatedToDate(args: CalendarNavigationEventData) {
        this.eventService.getEventsForMonth(args.date).then(value => {
            this.calendarEvents = value;
        });
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