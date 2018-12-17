import { Injectable } from "@angular/core";
import { ShahanshahiDate, KadmiDate, ZDate } from "../models";
import { CalendarDataService } from "../services";

@Injectable({
    providedIn: "root"
})
export class CalendarBusinessService {
    millisecondsInDay: number;
    millisecondsInYear: number;

    constructor(private dataService: CalendarDataService) {
        this.millisecondsInDay = 1000 * 60 * 60 * 24;
        this.millisecondsInYear = this.millisecondsInDay * 365;
    }

    convertGregorianToShahanshahi(input: Date): ShahanshahiDate {
        // O milliseconds = January 01, 1970, 00:00:00 UTC
        // S Date = Khordad Roj (6), Amamrdad Mah(5), 1339 Sal - day 126
        return this.convertGregorianToSKBase(input, 1339, 126, "Shahanshahi");
    }

    convertGregorianToKadmi(input: Date): KadmiDate {
        // O milliseconds = January 01, 1970, 00:00:00 UTC
        // S Date = Khordad Roj (6), Shehrevar Mah(6), 1339 Sal - day 156
        return this.convertGregorianToSKBase(input, 1339, 156, "Kadmi");
    }

    convertGregorianToSKBase(input: Date, refrenceYear: number, refrenceDayInYear: number, calendarType: string): ZDate {
        var refrenceDate = new Date(70, 0, 1);
        var totalMilliseconds = input.valueOf() - refrenceDate.valueOf();

        var year = 1339;
        var dayInYear = 126;
        if (totalMilliseconds > 0) {
            while (totalMilliseconds >= this.millisecondsInYear) {
                year += 1;
                totalMilliseconds -= this.millisecondsInYear;
            }
            while (totalMilliseconds >= this.millisecondsInDay) {
                dayInYear += 1;
                totalMilliseconds -= this.millisecondsInDay;
            }
            if (dayInYear > 365) {
                dayInYear -= 365;
                year += 1;
            }
        } else if (totalMilliseconds < 0) {
            while (Math.abs(totalMilliseconds) >= this.millisecondsInYear) {
                year -= 1;
                totalMilliseconds += this.millisecondsInYear;
            }
            while (Math.abs(totalMilliseconds) >= this.millisecondsInDay) {
                dayInYear -= 1;
                totalMilliseconds += this.millisecondsInDay;
            }
            if (Math.abs(dayInYear) > 365) {
                dayInYear += 365;
                year -= 1;
            }
        }
        var roj = this.dataService.getRojName(dayInYear);
        var mah = this.dataService.getMahName(dayInYear);

        var result = new ZDate(roj, mah, year, calendarType, input);
        return result;
    }

    convertShahanshahiToGregorian(roj: string, mah: string, year: number): Date {
        return this.convertSKToGregorianBase(roj, mah, year, 1339, 126);
    }

    convertKadmiToGregorian(roj: string, mah: string, year: number): Date {
        return this.convertSKToGregorianBase(roj, mah, year, 1339, 156);
    }

    convertSKToGregorianBase(roj: string, mah: string, year: number, refrenceYear: number, refrenceDayInYear: number): Date {
        var dayInYear = this.dataService.getDayInYear(roj, mah);
        var refrenceMilliseconds = refrenceYear * this.millisecondsInYear + refrenceDayInYear * this.millisecondsInDay;
        var inputMilliseconds = year * this.millisecondsInYear + dayInYear * this.millisecondsInDay;
        var totalMilliseconds = inputMilliseconds - refrenceMilliseconds;
        var result = new Date(totalMilliseconds);
        return result;
    }
}