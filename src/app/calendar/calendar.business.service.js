"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_data_service_1 = require("./calendar.data.service");
var calendar_models_1 = require("./calendar.models");
var CalendarBusinessService = /** @class */ (function () {
    function CalendarBusinessService(dataService) {
        this.dataService = dataService;
        this.millisecondsInDay = 1000 * 60 * 60 * 24;
        this.millisecondsInYear = this.millisecondsInDay * 365;
    }
    CalendarBusinessService.prototype.convertGregorianToShahanshahi = function (input) {
        // O milliseconds = January 01, 1970, 00:00:00 UTC
        // S Date = Khordad Roj (6), Amamrdad Mah(5), 1339 Sal - day 126
        return this.convertGregorianToSKBase(input, 1339, 126, "Shahanshahi");
    };
    CalendarBusinessService.prototype.convertGregorianToKadmi = function (input) {
        // O milliseconds = January 01, 1970, 00:00:00 UTC
        // S Date = Khordad Roj (6), Shehrevar Mah(6), 1339 Sal - day 156
        return this.convertGregorianToSKBase(input, 1339, 156, "Kadmi");
    };
    CalendarBusinessService.prototype.convertGregorianToSKBase = function (input, refrenceYear, refrenceDayInYear, calendarType) {
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
        }
        else if (totalMilliseconds < 0) {
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
        var result = new calendar_models_1.ZDate(roj, mah, year, calendarType, input);
        return result;
    };
    CalendarBusinessService.prototype.convertShahanshahiToGregorian = function (roj, mah, year) {
        return this.convertSKToGregorianBase(roj, mah, year, 1339, 126);
    };
    CalendarBusinessService.prototype.convertKadmiToGregorian = function (roj, mah, year) {
        return this.convertSKToGregorianBase(roj, mah, year, 1339, 156);
    };
    CalendarBusinessService.prototype.convertSKToGregorianBase = function (roj, mah, year, refrenceYear, refrenceDayInYear) {
        var dayInYear = this.dataService.getDayInYear(roj, mah);
        var refrenceMilliseconds = refrenceYear * this.millisecondsInYear + refrenceDayInYear * this.millisecondsInDay;
        var inputMilliseconds = year * this.millisecondsInYear + dayInYear * this.millisecondsInDay;
        var totalMilliseconds = inputMilliseconds - refrenceMilliseconds;
        var result = new Date(totalMilliseconds);
        return result;
    };
    CalendarBusinessService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [calendar_data_service_1.CalendarDataService])
    ], CalendarBusinessService);
    return CalendarBusinessService;
}());
exports.CalendarBusinessService = CalendarBusinessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuYnVzaW5lc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGVuZGFyLmJ1c2luZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQThEO0FBQzlELHFEQUFzRTtBQU90RTtJQUlJLGlDQUFvQixXQUFnQztRQUFoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBRUQsK0RBQTZCLEdBQTdCLFVBQThCLEtBQVc7UUFDckMsa0RBQWtEO1FBQ2xELGdFQUFnRTtRQUNoRSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQseURBQXVCLEdBQXZCLFVBQXdCLEtBQVc7UUFDL0Isa0RBQWtEO1FBQ2xELGlFQUFpRTtRQUNqRSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsMERBQXdCLEdBQXhCLFVBQXlCLEtBQVcsRUFBRSxZQUFvQixFQUFFLGlCQUF5QixFQUFFLFlBQW9CO1FBQ3ZHLElBQUksWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJ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T0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQTVFUSx1QkFBdUI7UUFIbkMsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBS21DLDJDQUFtQjtPQUozQyx1QkFBdUIsQ0E2RW5DO0lBQUQsOEJBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXRhU2VydmljZSB9IGZyb20gXCIuL2NhbGVuZGFyLmRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaGFoYW5zaGFoaURhdGUsIEthZG1pRGF0ZSwgWkRhdGUgfSBmcm9tIFwiLi9jYWxlbmRhci5tb2RlbHNcIjtcclxuaW1wb3J0IHsgdHJhbnNpdGl2ZVNjb3Blc0ZvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzL2ppdC9tb2R1bGVcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJCdXNpbmVzc1NlcnZpY2Uge1xyXG4gICAgbWlsbGlzZWNvbmRzSW5EYXk6IG51bWJlcjtcclxuICAgIG1pbGxpc2Vjb25kc0luWWVhcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IENhbGVuZGFyRGF0YVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kc0luRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kc0luWWVhciA9IHRoaXMubWlsbGlzZWNvbmRzSW5EYXkgKiAzNjU7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEdyZWdvcmlhblRvU2hhaGFuc2hhaGkoaW5wdXQ6IERhdGUpOiBTaGFoYW5zaGFoaURhdGUge1xyXG4gICAgICAgIC8vIE8gbWlsbGlzZWNvbmRzID0gSmFudWFyeSAwMSwgMTk3MCwgMDA6MDA6MDAgVVRDXHJcbiAgICAgICAgLy8gUyBEYXRlID0gS2hvcmRhZCBSb2ogKDYpLCBBbWFtcmRhZCBNYWgoNSksIDEzMzkgU2FsIC0gZGF5IDEyNlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRHcmVnb3JpYW5Ub1NLQmFzZShpbnB1dCwgMTMzOSwgMTI2LCBcIlNoYWhhbnNoYWhpXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRHcmVnb3JpYW5Ub0thZG1pKGlucHV0OiBEYXRlKTogS2FkbWlEYXRlIHtcclxuICAgICAgICAvLyBPIG1pbGxpc2Vjb25kcyA9IEphbnVhcnkgMDEsIDE5NzAsIDAwOjAwOjAwIFVUQ1xyXG4gICAgICAgIC8vIFMgRGF0ZSA9IEtob3JkYWQgUm9qICg2KSwgU2hlaHJldmFyIE1haCg2KSwgMTMzOSBTYWwgLSBkYXkgMTU2XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEdyZWdvcmlhblRvU0tCYXNlKGlucHV0LCAxMzM5LCAxNTYsIFwiS2FkbWlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEdyZWdvcmlhblRvU0tCYXNlKGlucHV0OiBEYXRlLCByZWZyZW5jZVllYXI6IG51bWJlciwgcmVmcmVuY2VEYXlJblllYXI6IG51bWJlciwgY2FsZW5kYXJUeXBlOiBzdHJpbmcpOiBaRGF0ZSB7XHJcbiAgICAgICAgdmFyIHJlZnJlbmNlRGF0ZSA9IG5ldyBEYXRlKDcwLCAwLCAxKTtcclxuICAgICAgICB2YXIgdG90YWxNaWxsaXNlY29uZHMgPSBpbnB1dC52YWx1ZU9mKCkgLSByZWZyZW5jZURhdGUudmFsdWVPZigpO1xyXG5cclxuICAgICAgICB2YXIgeWVhciA9IDEzMzk7XHJcbiAgICAgICAgdmFyIGRheUluWWVhciA9IDEyNjtcclxuICAgICAgICBpZiAodG90YWxNaWxsaXNlY29uZHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0b3RhbE1pbGxpc2Vjb25kcyA+PSB0aGlzLm1pbGxpc2Vjb25kc0luWWVhcikge1xyXG4gICAgICAgICAgICAgICAgeWVhciArPSAxO1xyXG4gICAgICAgICAgICAgICAgdG90YWxNaWxsaXNlY29uZHMgLT0gdGhpcy5taWxsaXNlY29uZHNJblllYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKHRvdGFsTWlsbGlzZWNvbmRzID49IHRoaXMubWlsbGlzZWNvbmRzSW5EYXkpIHtcclxuICAgICAgICAgICAgICAgIGRheUluWWVhciArPSAxO1xyXG4gICAgICAgICAgICAgICAgdG90YWxNaWxsaXNlY29uZHMgLT0gdGhpcy5taWxsaXNlY29uZHNJbkRheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF5SW5ZZWFyID4gMzY1KSB7XHJcbiAgICAgICAgICAgICAgICBkYXlJblllYXIgLT0gMzY1O1xyXG4gICAgICAgICAgICAgICAgeWVhciArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbE1pbGxpc2Vjb25kcyA8IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKHRvdGFsTWlsbGlzZWNvbmRzKSA+PSB0aGlzLm1pbGxpc2Vjb25kc0luWWVhcikge1xyXG4gICAgICAgICAgICAgICAgeWVhciAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdG90YWxNaWxsaXNlY29uZHMgKz0gdGhpcy5taWxsaXNlY29uZHNJblllYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKHRvdGFsTWlsbGlzZWNvbmRzKSA+PSB0aGlzLm1pbGxpc2Vjb25kc0luRGF5KSB7XHJcbiAgICAgICAgICAgICAgICBkYXlJblllYXIgLT0gMTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTWlsbGlzZWNvbmRzICs9IHRoaXMubWlsbGlzZWNvbmRzSW5EYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRheUluWWVhcikgPiAzNjUpIHtcclxuICAgICAgICAgICAgICAgIGRheUluWWVhciArPSAzNjU7XHJcbiAgICAgICAgICAgICAgICB5ZWFyIC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJvaiA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Um9qTmFtZShkYXlJblllYXIpO1xyXG4gICAgICAgIHZhciBtYWggPSB0aGlzLmRhdGFTZXJ2aWNlLmdldE1haE5hbWUoZGF5SW5ZZWFyKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBaRGF0ZShyb2osIG1haCwgeWVhciwgY2FsZW5kYXJUeXBlLCBpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0U2hhaGFuc2hhaGlUb0dyZWdvcmlhbihyb2o6IHN0cmluZywgbWFoOiBzdHJpbmcsIHllYXI6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTS1RvR3JlZ29yaWFuQmFzZShyb2osIG1haCwgeWVhciwgMTMzOSwgMTI2KTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0S2FkbWlUb0dyZWdvcmlhbihyb2o6IHN0cmluZywgbWFoOiBzdHJpbmcsIHllYXI6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTS1RvR3JlZ29yaWFuQmFzZShyb2osIG1haCwgeWVhciwgMTMzOSwgMTU2KTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0U0tUb0dyZWdvcmlhbkJhc2Uocm9qOiBzdHJpbmcsIG1haDogc3RyaW5nLCB5ZWFyOiBudW1iZXIsIHJlZnJlbmNlWWVhcjogbnVtYmVyLCByZWZyZW5jZURheUluWWVhcjogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAgICAgdmFyIGRheUluWWVhciA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF5SW5ZZWFyKHJvaiwgbWFoKTtcclxuICAgICAgICB2YXIgcmVmcmVuY2VNaWxsaXNlY29uZHMgPSByZWZyZW5jZVllYXIgKiB0aGlzLm1pbGxpc2Vjb25kc0luWWVhciArIHJlZnJlbmNlRGF5SW5ZZWFyICogdGhpcy5taWxsaXNlY29uZHNJbkRheTtcclxuICAgICAgICB2YXIgaW5wdXRNaWxsaXNlY29uZHMgPSB5ZWFyICogdGhpcy5taWxsaXNlY29uZHNJblllYXIgKyBkYXlJblllYXIgKiB0aGlzLm1pbGxpc2Vjb25kc0luRGF5O1xyXG4gICAgICAgIHZhciB0b3RhbE1pbGxpc2Vjb25kcyA9IGlucHV0TWlsbGlzZWNvbmRzIC0gcmVmcmVuY2VNaWxsaXNlY29uZHM7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKHRvdGFsTWlsbGlzZWNvbmRzKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19