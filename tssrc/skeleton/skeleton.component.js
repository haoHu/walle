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
// import {DashboardComponent} from '../dashboard/dashboard.component';
// import {WeatherComponent} from '../weather/weather.component';
const WalleRoute = require('../mod/route.service');
console.log(WalleRoute.WalleRouteService);
let WalleRouteService = new WalleRoute.WalleRouteService();
let routeConfigs = WalleRouteService.getRoutes();
let comPath = __dirname;
// @RouteConfig([
//   {
//     path : '/dashboard',
//     name : 'Dashboard',
//     component : DashboardComponent,
//     useAsDefault : true
//   },
//   {
//     path : '/weather',
//     name : 'Weather',
//     component : WeatherComponent
//   }
// ])
let AppComponent = class AppComponent {
    constructor() {
        this.title = "Walle Skill 测试路由";
    }
    ngOnInit() {
        var menu1 = $('#walle_menu_1');
        menu1.find('.menu-list').width(2260);
        var scrollMenu1 = new IScroll(menu1[0], {
            scrollX: true,
            scrollY: false,
            mouseWheel: false,
            momentum: false,
            snap: true,
            snapSpeed: 400,
            keyBindings: true
        });
        $.material.init();
    }
    ;
};
AppComponent = __decorate([
    router_deprecated_1.RouteConfig(routeConfigs),
    core_1.Component({
        selector: "walle-app",
        moduleId: comPath + '/skeleton.component',
        templateUrl: './skeleton.component.html',
        styleUrls: ['./skeleton.component.css'],
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=skeleton.component.js.map