"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
}*/
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.user = [
            { eid: 101, ename: "Ram", salary: 10000 },
            { eid: 102, ename: "Sita", salary: 10500 },
            { eid: 103, ename: "Lucky", salary: 9200 },
            { eid: 104, ename: "Bharath", salary: 10000 },
            { eid: 105, ename: "Vani", salary: 9000 },
            { eid: 106, ename: "Rani", salary: 8000 },
            { eid: 109, ename: "Chinoda", salary: 80000 },
            { eid: 110, ename: "Hero", salary: 50000 }
        ];
        this.title = 'EMPLOYEE-DETAILS';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
