import { Component, OnInit, Input } from "@angular/core";
import { ZDate } from "../models";

@Component({
    selector: "show-selected-date",
    moduleId: module.id,
    templateUrl: "./calendar.show-selected-date.component.html"
})
export class ShowSelectedDateComponent {
    private _zDate: ZDate;
    @Input("z-date")
    set zDate(zDate: ZDate) {
        this.onInputChange(zDate);
    }
    get zDate(): ZDate {
        return this._zDate;
    }

    gregorianDate: number;
    gregorianMonth: string;
    gregorianYear: number;
    gregorianMonthAndYear: string;
    gregorianDay: string;
    vaar: string;
    gah: string;

    constructor() { }

    onInputChange(zDate: ZDate): void {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const vaarNames = { "Sunday": "Ravivar", "Monday": "Soamvar", "Tuesday": "Mangalvar", "Wednesday": "Budhvar", "Thursday": "Guruvar", "Friday": "Shukravar", "Saturday": "Shanivar" }
        this._zDate = zDate;
        this.gregorianDate = zDate.date.getDate();
        this.gregorianMonth = monthNames[zDate.date.getMonth()];
        this.gregorianYear = zDate.date.getFullYear();
        this.gregorianMonthAndYear = this.gregorianMonth + " " + this.gregorianYear;
        this.gregorianDay = dayNames[zDate.date.getDay()];
        this.vaar = vaarNames[this.gregorianDay];
        this.gah = this.getGah(new Date());
    }

    getGah(input: Date): string {

        var refrence = new Date(70, 0, 1).setHours(input.getHours(), input.getMinutes(), input.getSeconds());
        var havanStart = new Date(70, 0, 1).setHours(6, 35, 0);
        var rapithwinStart = new Date(70, 0, 1).setHours(12, 40, 0);
        var uzirinStart = new Date(70, 0, 1).setHours(15, 40, 0);
        var aiwisruthremStart = new Date(70, 0, 1).setHours(18, 35, 0);
        var ushahinStart = new Date(70, 0, 1).setHours(0, 40, 0);
        let result: string;
        if (ushahinStart <= refrence && refrence < havanStart) {
            result = "Ushahin";
        } else if (havanStart <= refrence && refrence < rapithwinStart) {
            result = "Havan";
        } else if (rapithwinStart <= refrence && refrence < uzirinStart) {
            result = "Rapithwin";
        } else if (uzirinStart <= refrence && refrence < aiwisruthremStart) {
            result = "Uzirin";
        } else {
            result = "Aiwisruthrem";
        }
        return result;
    }
}