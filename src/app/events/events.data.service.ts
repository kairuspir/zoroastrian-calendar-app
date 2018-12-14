import { Injectable } from "@angular/core";
import { ZCalendarEvent } from "./event";
import { ZDate } from "../calendar/calendar.models";
import { CalendarDataService } from "../calendar/calendar.data.service";
var Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: "root"
})
export class EventsDataService {
    private database: any;
    events: Array<ZCalendarEvent>;
    constructor(protected calendarDataService: CalendarDataService) {
        (new Sqlite("ZoroastrianCalendarSQLite.db3")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS CalendarEvent(id INTEGER PRIMARY KEY AUTOINCREMENT, rojId INTEGER, mahId, INTEGER, sal INTEGER, title TEXT, description TEXT, calendarType TEXT, isPreloaded INTEGER, isDeleted INTEGER)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.error("OPEN DB ERROR", error);
        });
    }

    async getAll(): Promise<Array<ZCalendarEvent>> {
        return await this.database.all("SELECT id, rojId, mahId, sal, title, description, calendarType FROM CalendarEvent WHERE isDeleted = 0").then(async rows => {
            this.events = new Array<ZCalendarEvent>();
            for (var row in rows) {
                this.events.push(new ZCalendarEvent(rows[row][0], rows[row][1], rows[row][2], rows[row][3], rows[row][4], rows[row][5], rows[row][6]));
            }
            return await this.events;
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    getRecurringEventsForDay(date: ZDate): Promise<Array<ZCalendarEvent>> {
        var rojId = this.calendarDataService.getRojId(date.roj);
        var mahId = this.calendarDataService.getMahId(date.mah);
        var calendarType = date.calendarType;
        return this.database.all("SELECT id, rojId, mahId, sal, title, description, calendarType FROM CalendarEvent WHERE isDeleted = 0 and rojId = ? and mahId = ? and calendarType = ?", [rojId, mahId, calendarType]).then(rows => {
            this.events = new Array<ZCalendarEvent>();
            for (var row in rows) {
                this.events.push(new ZCalendarEvent(rows[row]["id"], rows[row]["rojId"], rows[row]["mahId"], rows[row]["sal"], rows[row]["title"], rows[row]["description"], rows[row]["calendarType"]));
            }
            return this.events;
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    upsert(entity: ZCalendarEvent): Promise<ZCalendarEvent> {
        if (entity.id === 0) {
            return this.database.execSQL("INSERT INTO CalendarEvent (rojId, mahId, sal, title, description, calendarType, isPreloaded, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [entity.rojId, entity.mahId, entity.sal, entity.title, entity.description, entity.calendarType, 0, 0]).then(id => {
                entity.id = id;
                return entity;
            }, error => {
                console.log("INSERT ERROR", error);
            });
        } else {
            return this.database.execSQL("UPDATE CalendarEvent SET rojId = ?, mahId = ?, sal = ?, title = ?, description = ?, calendarType = ? WHERE id = ?", [entity.rojId, entity.mahId, entity.sal, entity.title, entity.description, entity.calendarType, entity.id]).then(noOfRecords => {
                if (noOfRecords !== 1) {
                    console.log("UPSERT ERROR - number of records updated: " + noOfRecords + ", expected: 1");
                }
                return entity;
            }, error => {
                console.log("UPDATE ERROR", error);
            });
        }
    }

    recycle(entity: ZCalendarEvent): Promise<number> {
        return this.database.execSQL("UPDATE CalendarEvent SET isDeleted = ? WHERE id = ?", [1, entity.id]).then(noOfRecords => {
            if (noOfRecords !== 1) {
                console.log("RECYCLE ERROR - number of records updated: " + noOfRecords + ", expected: 1");
            }
            return noOfRecords;
        }, error => {
            console.log("UPDATE ERROR", error);
        });
    }

    restore(entity: ZCalendarEvent): Promise<number> {
        return this.database.execSQL("UPDATE CalendarEvent SET isDeleted = ? WHERE id = ?", [0, entity.id]).then(noOfRecords => {
            if (noOfRecords !== 1) {
                console.log("RESTORE ERROR - number of records updated: " + noOfRecords + ", expected: 1");
            }
            return noOfRecords;
        }, error => {
            console.log("UPDATE ERROR", error);
        });
    }

    purge(entity: ZCalendarEvent): Promise<number> {
        return this.database.execSQL("DELETE FROM CalendarEvent WHERE id = ?", [entity.id]).then(noOfRecords => {
            if (noOfRecords !== 1) {
                console.log("PURGE ERROR - number of records updated: " + noOfRecords + ", expected: 1");
            }
            return noOfRecords;
        }, error => {
            console.log("DELETE ERROR", error);
        });
    }
}