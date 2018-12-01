import { Injectable } from "@angular/core";
import { CalendarDataService } from "../calendar/calendar.data.service";
import { EventsDataService } from "./events.data.service";
import { ZCalendarEvent } from "./event";
import { ShahanshahiDate, ZDate } from "../calendar/calendar.models";
import { CalendarEvent } from "nativescript-ui-calendar";
import { CalendarBusinessService } from "../calendar/calendar.business.service";

@Injectable({ providedIn: "root" })
export class EventsBusinessService {
    constructor(private calendarDataService: CalendarDataService, private eventsDataService: EventsDataService, private calendarBusinessService: CalendarBusinessService) {
    }

    async getEventsForMonth(input: Date): Promise<Array<CalendarEvent>> {
        //TODO: add support for other calendars
        var month = input.getMonth();
        var startDate = new Date(input.getFullYear(), month, 1);
        var result = new Array<CalendarEvent>();
        while (startDate.getMonth() == month) {
            var eventsForDay = await this.getEventsForDay(startDate);
            eventsForDay.forEach(element => {
                result.push(element);
            });
            startDate.setHours(24);
        }
        return result;
    }

    async getEventsForDay(input: Date): Promise<Array<CalendarEvent>> {
        var result = new Array<CalendarEvent>();
        var sDate = this.calendarBusinessService.convertGregorianToShahanshahi(input);
        var kDate = this.calendarBusinessService.convertGregorianToKadmi(input);
        var sEvents = await this.eventsDataService.getRecurringEventsForDay(sDate);
        var kEvents = await this.eventsDataService.getRecurringEventsForDay(kDate);
        sEvents.forEach(event => {
            result.push(new CalendarEvent(event.title, input, input, true))
        });
        kEvents.forEach(event => {
            result.push(new CalendarEvent(event.title, input, input, true))
        });
        return result;
    }

    async getAll(): Promise<Array<ZCalendarEvent>> {
        return await this.eventsDataService.getAll();
    }

    async addEvent(zDate: ZDate, title: string, description: string): Promise<ZCalendarEvent> {
        var entity = new ZCalendarEvent(
            0,
            this.calendarDataService.getRojId(zDate.roj),
            this.calendarDataService.getMahId(zDate.mah),
            zDate.sal, title, description, zDate.calendarType);
        return await this.eventsDataService.upsert(entity);
    }

    async deleteAllEvents(): Promise<number> {
        const zevents = await this.getAll();
        var noOfRecords = 0;
        zevents.forEach(async zevent => {
            noOfRecords += await this.eventsDataService.purge(zevent);
        });
        return noOfRecords;
    }
}