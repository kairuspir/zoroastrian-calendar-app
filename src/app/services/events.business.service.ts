import { Injectable } from "@angular/core";
import { CalendarDataService, EventsDataService, CalendarBusinessService, FirebaseService } from "../services";
import { ZCalendarEvent, ZDate } from "../models";
import { CalendarEvent } from "nativescript-ui-calendar";
import { from, Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/observable/concat";

@Injectable({ providedIn: "root" })
export class EventsBusinessService {
    private _eventsForDay: BehaviorSubject<Array<CalendarEvent>>;
    private _eventsForMonth: BehaviorSubject<Array<CalendarEvent>>;
    constructor(
        private calendarDataService: CalendarDataService,
        private eventsDataService: EventsDataService,
        private calendarBusinessService: CalendarBusinessService,
        private firebaseService: FirebaseService
    ) {
        this._eventsForDay = new BehaviorSubject([]);
        this._eventsForMonth = new BehaviorSubject([]);
    }
    get eventsForDay(): Observable<Array<CalendarEvent>> {
        return this._eventsForDay.asObservable();
    }
    get eventsForMonth(): Observable<Array<CalendarEvent>> {
        return this._eventsForMonth.asObservable();
    }
    loadEventsForMonth(input: Date): void {
        //TODO: add support for other calendars
        var month = input.getMonth();
        var startDate = new Date(input.getFullYear(), month, 1);
        //var result = new Array<CalendarEvent>();
        var obsArray = new Array<Observable<Array<CalendarEvent>>>();
        while (startDate.getMonth() == month) {
            obsArray.push(this.getEventsForDay(startDate));
            startDate.setHours(24);
        }
        Observable.concat(...obsArray).subscribe(events => {
            this._eventsForMonth.next(events);
        });;
    }

    getEventsForDay(input: Date): Observable<Array<CalendarEvent>> {
        var sDate = this.calendarBusinessService.convertGregorianToShahanshahi(input);
        var kDate = this.calendarBusinessService.convertGregorianToKadmi(input);
        var sEvents$ = from(this.eventsDataService.getRecurringEventsForDay(sDate))
            .pipe(map(events => {
                var mapResult = new Array<CalendarEvent>();
                events.forEach(event => {
                    mapResult.push(new CalendarEvent(event.title, input, input, true))
                });
                return mapResult;
            }));
        var kEvents$ = from(this.eventsDataService.getRecurringEventsForDay(kDate))
            .pipe(map(events => {
                var mapResult = new Array<CalendarEvent>();
                events.forEach(event => {
                    mapResult.push(new CalendarEvent(event.title, input, input, true))
                });
                return mapResult;
            }));
        var fEvents$ = this.firebaseService.defaultCalendarEvents.pipe(map(events => {
            var mapResult = new Array<CalendarEvent>();
            events.forEach(event => {
                mapResult.push(new CalendarEvent(event.title, input, input, true))
            });
            return mapResult;
        }));
        var result = Observable.concat(sEvents$, kEvents$, fEvents$)
        return result;
    }

    loadEventsForDay(input: Date): void {
        this.getEventsForDay(input).subscribe(events => {
            this._eventsForDay.next(events);
        });
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