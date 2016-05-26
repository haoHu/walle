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
const dashboard_component_1 = require('./dashboard/dashboard.component');
const weather_component_1 = require('./weather/weather.component');
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Walle Skill 测试路由';
    }
};
AppComponent = __decorate([
    router_deprecated_1.RouteConfig([
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard_component_1.DashboardComponent,
            useAsDefault: true
        },
        {
            path: '/weather',
            name: 'Weather',
            component: weather_component_1.WeatherComponent
        }
    ]),
    core_1.Component({
        selector: "walle-app",
        template: `
    <h1>{{title}}</h1>
    <nav>
      <a class="btn btn-link" [routerLink]="['Dashboard']">Dashboard</a>
      <a class="btn btn-link" [routerLink]="['Weather']">Weather</a>
    </nav>
    <router-outlet></router-outlet>
  `,
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map