import { Injectable } from "@angular/core";
import { CalendarDataService, EventsDataService, CalendarBusinessService } from "~/app/services";
import { ZCalendarEvent, ZDate } from "~/app/models";
import { CalendarEvent } from "nativescript-ui-calendar";
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter } from "rxjs/operators";
import "rxjs/add/observable/merge";
import { FirebaseLocalStoreService } from "~/app/services";
import { fromPromise } from "rxjs/internal/observable/fromPromise";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/first"

@Injectable({ providedIn: "root" })
export class EventsBusinessService {
    private _eventsForDay: BehaviorSubject<Array<CalendarEvent>>;
    private _eventsForMonth: BehaviorSubject<Array<CalendarEvent>>;
    constructor(
        private calendarDataService: CalendarDataService,
        private eventsDataService: EventsDataService,
        private calendarBusinessService: CalendarBusinessService,
        private firebaseService: FirebaseLocalStoreService
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
            obsArray.push(this.getEventsForDay(startDate).first());
            startDate.setHours(24);
        }
        Observable.forkJoin(...obsArray)
            .pipe(map(value => {
                var mapResult = new Array<CalendarEvent>();
                value.forEach(item => { mapResult.push(...item); });
                return mapResult;
            }))
            .first()
            .subscribe(events => {
                this._eventsForMonth.next(events);
            });;
    }

    getEventsForDay(input: Date): Observable<Array<CalendarEvent>> {
        var sDate = this.calendarBusinessService.convertGregorianToShahanshahi(input);
        var kDate = this.calendarBusinessService.convertGregorianToKadmi(input);
        var sEvents$ = fromPromise(this.eventsDataService.getRecurringEventsForDay(sDate))
            .pipe(map(events => {
                var mapResult = new Array<CalendarEvent>();
                events.forEach(event => {
                    mapResult.push(new CalendarEvent(event.title, input, input, true))
                });
                return mapResult;
            }));
        var kEvents$ = fromPromise(this.eventsDataService.getRecurringEventsForDay(kDate))
            .pipe(map(events => {
                var mapResult = new Array<CalendarEvent>();
                events.forEach(event => {
                    mapResult.push(new CalendarEvent(event.title, input, input, true))
                });
                return mapResult;
            }));
        var fsEvents$ = this.firebaseService.defaultCalendarEvents.pipe(map(events => {
            var mapResult = new Array<CalendarEvent>();
            var dayId = this.calendarDataService.getDayInYear(sDate.roj, sDate.mah);
            events.forEach(event => {
                if (event.dayOfYear == dayId) {
                    mapResult.push(new CalendarEvent(event.title, input, input, true));
                }
            });
            return mapResult;
        }));
        var fkEvents$ = this.firebaseService.defaultCalendarEvents.pipe(map(events => {
            var mapResult = new Array<CalendarEvent>();
            var dayId = this.calendarDataService.getDayInYear(kDate.roj, kDate.mah);
            events.forEach(event => {
                if (event.dayOfYear == dayId) {
                    mapResult.push(new CalendarEvent(event.title, input, input, true));
                }
            });
            return mapResult;
        }));
        var result = Observable.forkJoin(sEvents$.first(), kEvents$.first(), fsEvents$.first(), fkEvents$.first())
            .pipe(map(value => {
                var mapResult = new Array<CalendarEvent>();
                value.forEach(item => { mapResult.push(...item); });
                return mapResult;
            }))
        return result;
    }

    loadEventsForDay(input: Date): void {
        this.getEventsForDay(input).first().subscribe(events => {
            this._eventsForDay.next(events);
        });
    }

    getAllFirestoreEvents() {
        return this.firebaseService.defaultCalendarEvents.share();
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