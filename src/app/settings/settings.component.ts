import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "~/app/shared/base.component";

@Component({
    selector: "ns-app-admin-settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent extends BaseComponent implements OnInit {
    ngOnInit() { }
}