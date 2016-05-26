"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const path = require('path');
// import {path} from 'path';
console.log(path);
// let rootPath = window.Walle.RootPath;
// let comPath = rootPath + '/src/dashboard';
let comPath = __dirname;
let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'walle-dashboard',
        // moduleId : 'src/dashboard/dashboard.component',
        moduleId: comPath + '/dashboard.component',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [router_deprecated_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map