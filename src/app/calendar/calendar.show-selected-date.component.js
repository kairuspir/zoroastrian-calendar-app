"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_models_1 = require("./calendar.models");
var ShowSelectedDateComponent = /** @class */ (function () {
    function ShowSelectedDateComponent() {
    }
    Object.defineProperty(ShowSelectedDateComponent.prototype, "zDate", {
        get: function () {
            return this._zDate;
        },
        set: function (zDate) {
            this.onInputChange(zDate);
        },
        enumerable: true,
        configurable: true
    });
    ShowSelectedDateComponent.prototype.onInputChange = function (zDate) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var vaarNames = { "Sunday": "Ravivar", "Monday": "Soamvar", "Tuesday": "Mangalvar", "Wednesday": "Budhvar", "Thursday": "Guruvar", "Friday": "Shukravar", "Saturday": "Shanivar" };
        this._zDate = zDate;
        this.gregorianDate = zDate.date.getDate();
        this.gregorianMonth = monthNames[zDate.date.getMonth()];
        this.gregorianYear = zDate.date.getFullYear();
        this.gregorianMonthAndYear = this.gregorianMonth + " " + this.gregorianYear;
        this.gregorianDay = dayNames[zDate.date.getDay()];
        this.vaar = vaarNames[this.gregorianDay];
        this.gah = this.getGah(new Date());
    };
    ShowSelectedDateComponent.prototype.getGah = function (input) {
        var refrence = new Date(70, 0, 1).setHours(input.getHours(), input.getMinutes(), input.getSeconds());
        var havanStart = new Date(70, 0, 1).setHours(6, 35, 0);
        var rapithwinStart = new Date(70, 0, 1).setHours(12, 40, 0);
        var uzirinStart = new Date(70, 0, 1).setHours(15, 40, 0);
        var aiwisruthremStart = new Date(70, 0, 1).setHours(18, 35, 0);
        var ushahinStart = new Date(70, 0, 1).setHours(0, 40, 0);
        var result;
        if (ushahinStart <= refrence && refrence < havanStart) {
            result = "Ushahin";
        }
        else if (havanStart <= refrence && refrence < rapithwinStart) {
            result = "Havan";
        }
        else if (rapithwinStart <= refrence && refrence < uzirinStart) {
            result = "Rapithwin";
        }
        else if (uzirinStart <= refrence && refrence < aiwisruthremStart) {
            result = "Uzirin";
        }
        else {
            result = "Aiwisruthrem";
        }
        return result;
    };
    __decorate([
        core_1.Input("z-date"),
        __metadata("design:type", calendar_models_1.ZDate),
        __metadata("design:paramtypes", [calendar_models_1.ZDate])
    ], ShowSelectedDateComponent.prototype, "zDate", null);
    ShowSelectedDateComponent = __decorate([
        core_1.Component({
            selector: "show-selected-date",
            moduleId: module.id,
            templateUrl: "./calendar.show-selected-date.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], ShowSelectedDateComponent);
    return ShowSelectedDateComponent;
}());
exports.ShowSelectedDateComponent = ShowSelectedDateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2hvdy1zZWxlY3RlZC1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGVuZGFyLnNob3ctc2VsZWN0ZWQtZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQscURBQTBDO0FBTzFDO0lBa0JJO0lBQWdCLENBQUM7SUFmakIsc0JBQUksNENBQUs7YUFHVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBTEQsVUFBVSxLQUFZO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFlRCxpREFBYSxHQUFiLFVBQWMsS0FBWTtRQUN0QixJQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUN0RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDbkUsQ0FBQztRQUNGLElBQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEcsSUFBTSxTQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUE7UUFDcEwsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLElB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QXlCLENBMERyQztJQUFELGdDQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgWkRhdGUgfSBmcm9tIFwiLi9jYWxlbmRhci5tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2hvdy1zZWxlY3RlZC1kYXRlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYWxlbmRhci5zaG93LXNlbGVjdGVkLWRhdGUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvd1NlbGVjdGVkRGF0ZUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF96RGF0ZTogWkRhdGU7XHJcbiAgICBASW5wdXQoXCJ6LWRhdGVcIilcclxuICAgIHNldCB6RGF0ZSh6RGF0ZTogWkRhdGUpIHtcclxuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoekRhdGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHpEYXRlKCk6IFpEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fekRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZ29yaWFuRGF0ZTogbnVtYmVyO1xyXG4gICAgZ3JlZ29yaWFuTW9udGg6IHN0cmluZztcclxuICAgIGdyZWdvcmlhblllYXI6IG51bWJlcjtcclxuICAgIGdyZWdvcmlhbk1vbnRoQW5kWWVhcjogc3RyaW5nO1xyXG4gICAgZ3JlZ29yaWFuRGF5OiBzdHJpbmc7XHJcbiAgICB2YWFyOiBzdHJpbmc7XHJcbiAgICBnYWg6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG9uSW5wdXRDaGFuZ2UoekRhdGU6IFpEYXRlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGRheU5hbWVzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XHJcbiAgICAgICAgY29uc3QgdmFhck5hbWVzID0geyBcIlN1bmRheVwiOiBcIlJhdml2YXJcIiwgXCJNb25kYXlcIjogXCJTb2FtdmFyXCIsIFwiVHVlc2RheVwiOiBcIk1hbmdhbHZhclwiLCBcIldlZG5lc2RheVwiOiBcIkJ1ZGh2YXJcIiwgXCJUaHVyc2RheVwiOiBcIkd1cnV2YXJcIiwgXCJGcmlkYXlcIjogXCJTaHVrcmF2YXJcIiwgXCJTYXR1cmRheVwiOiBcIlNoYW5pdmFyXCIgfVxyXG4gICAgICAgIHRoaXMuX3pEYXRlID0gekRhdGU7XHJcbiAgICAgICAgdGhpcy5ncmVnb3JpYW5EYXRlID0gekRhdGUuZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdGhpcy5ncmVnb3JpYW5Nb250aCA9IG1vbnRoTmFtZXNbekRhdGUuZGF0ZS5nZXRNb250aCgpXTtcclxuICAgICAgICB0aGlzLmdyZWdvcmlhblllYXIgPSB6RGF0ZS5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmVnb3JpYW5Nb250aEFuZFllYXIgPSB0aGlzLmdyZWdvcmlhbk1vbnRoICsgXCIgXCIgKyB0aGlzLmdyZWdvcmlhblllYXI7XHJcbiAgICAgICAgdGhpcy5ncmVnb3JpYW5EYXkgPSBkYXlOYW1lc1t6RGF0ZS5kYXRlLmdldERheSgpXTtcclxuICAgICAgICB0aGlzLnZhYXIgPSB2YWFyTmFtZXNbdGhpcy5ncmVnb3JpYW5EYXldO1xyXG4gICAgICAgIHRoaXMuZ2FoID0gdGhpcy5nZXRHYWgobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FoKGlucHV0OiBEYXRlKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgdmFyIHJlZnJlbmNlID0gbmV3IERhdGUoNzAsIDAsIDEpLnNldEhvdXJzKGlucHV0LmdldEhvdXJzKCksIGlucHV0LmdldE1pbnV0ZXMoKSwgaW5wdXQuZ2V0U2Vjb25kcygpKTtcclxuICAgICAgICB2YXIgaGF2YW5TdGFydCA9IG5ldyBEYXRlKDcwLCAwLCAxKS5zZXRIb3Vycyg2LCAzNSwgMCk7XHJcbiAgICAgICAgdmFyIHJhcGl0aHdpblN0YXJ0ID0gbmV3IERhdGUoNzAsIDAsIDEpLnNldEhvdXJzKDEyLCA0MCwgMCk7XHJcbiAgICAgICAgdmFyIHV6aXJpblN0YXJ0ID0gbmV3IERhdGUoNzAsIDAsIDEpLnNldEhvdXJzKDE1LCA0MCwgMCk7XHJcbiAgICAgICAgdmFyIGFpd2lzcnV0aHJlbVN0YXJ0ID0gbmV3IERhdGUoNzAsIDAsIDEpLnNldEhvdXJzKDE4LCAzNSwgMCk7XHJcbiAgICAgICAgdmFyIHVzaGFoaW5TdGFydCA9IG5ldyBEYXRlKDcwLCAwLCAxKS5zZXRIb3VycygwLCA0MCwgMCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgIGlmICh1c2hhaGluU3RhcnQgPD0gcmVmcmVuY2UgJiYgcmVmcmVuY2UgPCBoYXZhblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiVXNoYWhpblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGF2YW5TdGFydCA8PSByZWZyZW5jZSAmJiByZWZyZW5jZSA8IHJhcGl0aHdpblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiSGF2YW5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHJhcGl0aHdpblN0YXJ0IDw9IHJlZnJlbmNlICYmIHJlZnJlbmNlIDwgdXppcmluU3RhcnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gXCJSYXBpdGh3aW5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHV6aXJpblN0YXJ0IDw9IHJlZnJlbmNlICYmIHJlZnJlbmNlIDwgYWl3aXNydXRocmVtU3RhcnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gXCJVemlyaW5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcIkFpd2lzcnV0aHJlbVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19