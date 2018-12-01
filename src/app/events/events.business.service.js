"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_data_service_1 = require("../calendar/calendar.data.service");
var events_data_service_1 = require("./events.data.service");
var event_1 = require("./event");
var nativescript_ui_calendar_1 = require("nativescript-ui-calendar");
var calendar_business_service_1 = require("../calendar/calendar.business.service");
var EventsBusinessService = /** @class */ (function () {
    function EventsBusinessService(calendarDataService, eventsDataService, calendarBusinessService) {
        this.calendarDataService = calendarDataService;
        this.eventsDataService = eventsDataService;
        this.calendarBusinessService = calendarBusinessService;
    }
    EventsBusinessService.prototype.getEventsForMonth = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var month, startDate, result, eventsForDay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        month = input.getMonth();
                        startDate = new Date(input.getFullYear(), month, 1);
                        result = new Array();
                        _a.label = 1;
                    case 1:
                        if (!(startDate.getMonth() == month)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getEventsForDay(startDate)];
                    case 2:
                        eventsForDay = _a.sent();
                        eventsForDay.forEach(function (element) {
                            result.push(element);
                        });
                        startDate.setHours(24);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    EventsBusinessService.prototype.getEventsForDay = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var result, sDate, kDate, sEvents, kEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = new Array();
                        sDate = this.calendarBusinessService.convertGregorianToShahanshahi(input);
                        kDate = this.calendarBusinessService.convertGregorianToKadmi(input);
                        return [4 /*yield*/, this.eventsDataService.getRecurringEventsForDay(sDate)];
                    case 1:
                        sEvents = _a.sent();
                        return [4 /*yield*/, this.eventsDataService.getRecurringEventsForDay(kDate)];
                    case 2:
                        kEvents = _a.sent();
                        sEvents.forEach(function (event) {
                            result.push(new nativescript_ui_calendar_1.CalendarEvent(event.title, input, input, true));
                        });
                        kEvents.forEach(function (event) {
                            result.push(new nativescript_ui_calendar_1.CalendarEvent(event.title, input, input, true));
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    EventsBusinessService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventsDataService.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventsBusinessService.prototype.addEvent = function (zDate, title, description) {
        return __awaiter(this, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new event_1.ZCalendarEvent(0, this.calendarDataService.getRojId(zDate.roj), this.calendarDataService.getMahId(zDate.mah), zDate.sal, title, description, zDate.calendarType);
                        return [4 /*yield*/, this.eventsDataService.upsert(entity)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventsBusinessService.prototype.deleteAllEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var zevents, noOfRecords;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        zevents = _a.sent();
                        noOfRecords = 0;
                        zevents.forEach(function (zevent) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = noOfRecords;
                                        return [4 /*yield*/, this.eventsDataService.purge(zevent)];
                                    case 1:
                                        noOfRecords = _a + _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, noOfRecords];
                }
            });
        });
    };
    EventsBusinessService = __decorate([
        core_1.Injectable({ providedIn: "root" }),
        __metadata("design:paramtypes", [calendar_data_service_1.CalendarDataService, events_data_service_1.EventsDataService, calendar_business_service_1.CalendarBusinessService])
    ], EventsBusinessService);
    return EventsBusinessService;
}());
exports.EventsBusinessService = EventsBusinessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmJ1c2luZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudHMuYnVzaW5lc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBd0U7QUFDeEUsNkRBQTBEO0FBQzFELGlDQUF5QztBQUV6QyxxRUFBeUQ7QUFDekQsbUZBQWdGO0FBR2hGO0lBQ0ksK0JBQW9CLG1CQUF3QyxFQUFVLGlCQUFvQyxFQUFVLHVCQUFnRDtRQUFoSix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEssQ0FBQztJQUVLLGlEQUFpQixHQUF2QixVQUF3QixLQUFXOzs7Ozs7d0JBRTNCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3pCLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7Ozs2QkFDakMsQ0FBQSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSyxDQUFBO3dCQUNiLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFwRCxZQUFZLEdBQUcsU0FBcUM7d0JBQ3hELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPOzRCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixDQUFDLENBQUMsQ0FBQzt3QkFDSCxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs0QkFFM0Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUssK0NBQWUsR0FBckIsVUFBc0IsS0FBVzs7Ozs7O3dCQUN6QixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7d0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFFLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFELHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXRFLE9BQU8sR0FBRyxTQUE0RDt3QkFDNUQscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBdEUsT0FBTyxHQUFHLFNBQTREO3dCQUMxRSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzs0QkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHdDQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7d0JBQ25FLENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLOzRCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksd0NBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTt3QkFDbkUsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUssc0NBQU0sR0FBWjs7Ozs0QkFDVyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUE7NEJBQTVDLHNCQUFPLFNBQXFDLEVBQUM7Ozs7S0FDaEQ7SUFFSyx3Q0FBUSxHQUFkLFVBQWUsS0FBWSxFQUFFLEtBQWEsRUFBRSxXQUFtQjs7Ozs7O3dCQUN2RCxNQUFNLEdBQUcsSUFBSSxzQkFBYyxDQUMzQixDQUFDLEVBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUM1QyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNoRCxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzRCQUFsRCxzQkFBTyxTQUEyQyxFQUFDOzs7O0tBQ3REO0lBRUssK0NBQWUsR0FBckI7Ozs7Ozs0QkFDb0IscUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBN0IsT0FBTyxHQUFHLFNBQW1CO3dCQUMvQixXQUFXLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQU0sTUFBTTs7Ozs7d0NBQ3hCLEtBQUEsV0FBVyxDQUFBO3dDQUFJLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dDQUF6RCxXQUFXLEdBQVgsS0FBZSxTQUEwQyxDQUFDOzs7OzZCQUM3RCxDQUFDLENBQUM7d0JBQ0gsc0JBQU8sV0FBVyxFQUFDOzs7O0tBQ3RCO0lBdERRLHFCQUFxQjtRQURqQyxpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQUVVLDJDQUFtQixFQUE2Qix1Q0FBaUIsRUFBbUMsbURBQXVCO09BRDNKLHFCQUFxQixDQXVEakM7SUFBRCw0QkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2NhbGVuZGFyL2NhbGVuZGFyLmRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFdmVudHNEYXRhU2VydmljZSB9IGZyb20gXCIuL2V2ZW50cy5kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWkNhbGVuZGFyRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xyXG5pbXBvcnQgeyBTaGFoYW5zaGFoaURhdGUsIFpEYXRlIH0gZnJvbSBcIi4uL2NhbGVuZGFyL2NhbGVuZGFyLm1vZGVsc1wiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckJ1c2luZXNzU2VydmljZSB9IGZyb20gXCIuLi9jYWxlbmRhci9jYWxlbmRhci5idXNpbmVzcy5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IFwicm9vdFwiIH0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNCdXNpbmVzc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWxlbmRhckRhdGFTZXJ2aWNlOiBDYWxlbmRhckRhdGFTZXJ2aWNlLCBwcml2YXRlIGV2ZW50c0RhdGFTZXJ2aWNlOiBFdmVudHNEYXRhU2VydmljZSwgcHJpdmF0ZSBjYWxlbmRhckJ1c2luZXNzU2VydmljZTogQ2FsZW5kYXJCdXNpbmVzc1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRFdmVudHNGb3JNb250aChpbnB1dDogRGF0ZSk6IFByb21pc2U8QXJyYXk8Q2FsZW5kYXJFdmVudD4+IHtcclxuICAgICAgICAvL1RPRE86IGFkZCBzdXBwb3J0IGZvciBvdGhlciBjYWxlbmRhcnNcclxuICAgICAgICB2YXIgbW9udGggPSBpbnB1dC5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShpbnB1dC5nZXRGdWxsWWVhcigpLCBtb250aCwgMSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxDYWxlbmRhckV2ZW50PigpO1xyXG4gICAgICAgIHdoaWxlIChzdGFydERhdGUuZ2V0TW9udGgoKSA9PSBtb250aCkge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRzRm9yRGF5ID0gYXdhaXQgdGhpcy5nZXRFdmVudHNGb3JEYXkoc3RhcnREYXRlKTtcclxuICAgICAgICAgICAgZXZlbnRzRm9yRGF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXRIb3VycygyNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0RXZlbnRzRm9yRGF5KGlucHV0OiBEYXRlKTogUHJvbWlzZTxBcnJheTxDYWxlbmRhckV2ZW50Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8Q2FsZW5kYXJFdmVudD4oKTtcclxuICAgICAgICB2YXIgc0RhdGUgPSB0aGlzLmNhbGVuZGFyQnVzaW5lc3NTZXJ2aWNlLmNvbnZlcnRHcmVnb3JpYW5Ub1NoYWhhbnNoYWhpKGlucHV0KTtcclxuICAgICAgICB2YXIga0RhdGUgPSB0aGlzLmNhbGVuZGFyQnVzaW5lc3NTZXJ2aWNlLmNvbnZlcnRHcmVnb3JpYW5Ub0thZG1pKGlucHV0KTtcclxuICAgICAgICB2YXIgc0V2ZW50cyA9IGF3YWl0IHRoaXMuZXZlbnRzRGF0YVNlcnZpY2UuZ2V0UmVjdXJyaW5nRXZlbnRzRm9yRGF5KHNEYXRlKTtcclxuICAgICAgICB2YXIga0V2ZW50cyA9IGF3YWl0IHRoaXMuZXZlbnRzRGF0YVNlcnZpY2UuZ2V0UmVjdXJyaW5nRXZlbnRzRm9yRGF5KGtEYXRlKTtcclxuICAgICAgICBzRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgQ2FsZW5kYXJFdmVudChldmVudC50aXRsZSwgaW5wdXQsIGlucHV0LCB0cnVlKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBrRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgQ2FsZW5kYXJFdmVudChldmVudC50aXRsZSwgaW5wdXQsIGlucHV0LCB0cnVlKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPEFycmF5PFpDYWxlbmRhckV2ZW50Pj4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV2ZW50c0RhdGFTZXJ2aWNlLmdldEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZEV2ZW50KHpEYXRlOiBaRGF0ZSwgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyk6IFByb21pc2U8WkNhbGVuZGFyRXZlbnQ+IHtcclxuICAgICAgICB2YXIgZW50aXR5ID0gbmV3IFpDYWxlbmRhckV2ZW50KFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyRGF0YVNlcnZpY2UuZ2V0Um9qSWQoekRhdGUucm9qKSxcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckRhdGFTZXJ2aWNlLmdldE1haElkKHpEYXRlLm1haCksXHJcbiAgICAgICAgICAgIHpEYXRlLnNhbCwgdGl0bGUsIGRlc2NyaXB0aW9uLCB6RGF0ZS5jYWxlbmRhclR5cGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV2ZW50c0RhdGFTZXJ2aWNlLnVwc2VydChlbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUFsbEV2ZW50cygpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHpldmVudHMgPSBhd2FpdCB0aGlzLmdldEFsbCgpO1xyXG4gICAgICAgIHZhciBub09mUmVjb3JkcyA9IDA7XHJcbiAgICAgICAgemV2ZW50cy5mb3JFYWNoKGFzeW5jIHpldmVudCA9PiB7XHJcbiAgICAgICAgICAgIG5vT2ZSZWNvcmRzICs9IGF3YWl0IHRoaXMuZXZlbnRzRGF0YVNlcnZpY2UucHVyZ2UoemV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm9PZlJlY29yZHM7XHJcbiAgICB9XHJcbn0iXX0=