"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZDate = /** @class */ (function () {
    function ZDate(roj, mah, sal, calendarType, date) {
        this.roj = roj;
        this.mah = mah;
        this.sal = sal;
        this.date = date;
        this.calendarType = calendarType;
    }
    ZDate = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [String, String, Number, String, Date])
    ], ZDate);
    return ZDate;
}());
exports.ZDate = ZDate;
var ShahanshahiDate = /** @class */ (function (_super) {
    __extends(ShahanshahiDate, _super);
    function ShahanshahiDate(roj, mah, sal, date) {
        return _super.call(this, roj, mah, sal, "Shahanshahi", date) || this;
    }
    ShahanshahiDate = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [String, String, Number, Date])
    ], ShahanshahiDate);
    return ShahanshahiDate;
}(ZDate));
exports.ShahanshahiDate = ShahanshahiDate;
var KadmiDate = /** @class */ (function (_super) {
    __extends(KadmiDate, _super);
    function KadmiDate(roj, mah, sal, date) {
        return _super.call(this, roj, mah, sal, "Kadmi", date) || this;
    }
    KadmiDate = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [String, String, Number, Date])
    ], KadmiDate);
    return KadmiDate;
}(ZDate));
exports.KadmiDate = KadmiDate;
var FasliDate = /** @class */ (function (_super) {
    __extends(FasliDate, _super);
    function FasliDate(roj, mah, sal, date) {
        return _super.call(this, roj, mah, sal, "Fasli", date) || this;
    }
    FasliDate = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [String, String, Number, Date])
    ], FasliDate);
    return FasliDate;
}(ZDate));
exports.FasliDate = FasliDate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kYXIubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBTUksZUFBWSxHQUFXLEVBQ25CLEdBQVcsRUFDWCxHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsSUFBVTtRQUNWLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFoQlEsS0FBSztRQUhqQixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5RUFXWSxJQUFJO09BVkwsS0FBSyxDQWlCakI7SUFBRCxZQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksc0JBQUs7QUFxQmxCO0lBQXFDLG1DQUFLO0lBQ3RDLHlCQUFZLEdBQVcsRUFDbkIsR0FBVyxFQUNYLEdBQVcsRUFDWCxJQUFVO2VBQ1Ysa0JBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBTlEsZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztpRUFLWSxJQUFJO09BSkwsZUFBZSxDQU8zQjtJQUFELHNCQUFDO0NBQUEsQUFQRCxDQUFxQyxLQUFLLEdBT3pDO0FBUFksMENBQWU7QUFXNUI7SUFBK0IsNkJBQUs7SUFDaEMsbUJBQVksR0FBVyxFQUNuQixHQUFXLEVBQ1gsR0FBVyxFQUNYLElBQVU7ZUFDVixrQkFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFOUSxTQUFTO1FBSHJCLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO2lFQUtZLElBQUk7T0FKTCxTQUFTLENBT3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQVBELENBQStCLEtBQUssR0FPbkM7QUFQWSw4QkFBUztBQVd0QjtJQUErQiw2QkFBSztJQUNoQyxtQkFBWSxHQUFXLEVBQ25CLEdBQVcsRUFDWCxHQUFXLEVBQ1gsSUFBVTtlQUNWLGtCQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQU5RLFNBQVM7UUFIckIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7aUVBS1ksSUFBSTtPQUpMLFNBQVMsQ0FPckI7SUFBRCxnQkFBQztDQUFBLEFBUEQsQ0FBK0IsS0FBSyxHQU9uQztBQVBZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFpEYXRlIHtcclxuICAgIHJvajogc3RyaW5nO1xyXG4gICAgbWFoOiBzdHJpbmc7XHJcbiAgICBzYWw6IG51bWJlcjtcclxuICAgIGNhbGVuZGFyVHlwZTogc3RyaW5nO1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvajogc3RyaW5nLFxyXG4gICAgICAgIG1haDogc3RyaW5nLFxyXG4gICAgICAgIHNhbDogbnVtYmVyLFxyXG4gICAgICAgIGNhbGVuZGFyVHlwZTogc3RyaW5nLFxyXG4gICAgICAgIGRhdGU6IERhdGUpIHtcclxuICAgICAgICB0aGlzLnJvaiA9IHJvajtcclxuICAgICAgICB0aGlzLm1haCA9IG1haDtcclxuICAgICAgICB0aGlzLnNhbCA9IHNhbDtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJUeXBlID0gY2FsZW5kYXJUeXBlO1xyXG4gICAgfVxyXG59XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFoYW5zaGFoaURhdGUgZXh0ZW5kcyBaRGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb2o6IHN0cmluZyxcclxuICAgICAgICBtYWg6IHN0cmluZyxcclxuICAgICAgICBzYWw6IG51bWJlcixcclxuICAgICAgICBkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgc3VwZXIocm9qLCBtYWgsIHNhbCwgXCJTaGFoYW5zaGFoaVwiLCBkYXRlKTtcclxuICAgIH1cclxufVxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2FkbWlEYXRlIGV4dGVuZHMgWkRhdGUge1xyXG4gICAgY29uc3RydWN0b3Iocm9qOiBzdHJpbmcsXHJcbiAgICAgICAgbWFoOiBzdHJpbmcsXHJcbiAgICAgICAgc2FsOiBudW1iZXIsXHJcbiAgICAgICAgZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKHJvaiwgbWFoLCBzYWwsIFwiS2FkbWlcIiwgZGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhc2xpRGF0ZSBleHRlbmRzIFpEYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvajogc3RyaW5nLFxyXG4gICAgICAgIG1haDogc3RyaW5nLFxyXG4gICAgICAgIHNhbDogbnVtYmVyLFxyXG4gICAgICAgIGRhdGU6IERhdGUpIHtcclxuICAgICAgICBzdXBlcihyb2osIG1haCwgc2FsLCBcIkZhc2xpXCIsIGRhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElkQW5kTmFtZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERheU9mWWVhciB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbWFoSWQ6IG51bWJlcjtcclxuICAgIHJvaklkOiBudW1iZXI7XHJcbn0iXX0=