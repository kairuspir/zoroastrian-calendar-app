import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class ZDate {
    roj: string;
    mah: string;
    sal: number;
    calendarType: string;
    date: Date;
    constructor(roj: string,
        mah: string,
        sal: number,
        calendarType: string,
        date: Date) {
        this.roj = roj;
        this.mah = mah;
        this.sal = sal;
        this.date = date;
        this.calendarType = calendarType;
    }
}
@Injectable({
    providedIn: "root"
})
export class ShahanshahiDate extends ZDate {
    constructor(roj: string,
        mah: string,
        sal: number,
        date: Date) {
        super(roj, mah, sal, "Shahanshahi", date);
    }
}
@Injectable({
    providedIn: "root"
})
export class KadmiDate extends ZDate {
    constructor(roj: string,
        mah: string,
        sal: number,
        date: Date) {
        super(roj, mah, sal, "Kadmi", date);
    }
}
@Injectable({
    providedIn: "root"
})
export class FasliDate extends ZDate {
    constructor(roj: string,
        mah: string,
        sal: number,
        date: Date) {
        super(roj, mah, sal, "Fasli", date);
    }
}

export interface IdAndName {
    id: number;
    name: string;
}

export interface DayOfYear {
    id: number;
    mahId: number;
    rojId: number;
}