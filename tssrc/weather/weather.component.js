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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// let rootPath = window.Walle.RootPath;
// let comPath = rootPath + '/src/weather';
// console.info(__dirname);
var comPath = __dirname;
var WeatherComponent = (function () {
    function WeatherComponent(router) {
        this.router = router;
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'walle-weather',
            // moduleId: module.id,
            // templateUrl : 'file:///Users/huhao/github/walle/src/weather/weather.component.html',
            // styleUrls : ['file:///Users/huhao/github/walle/src/weather/weather.component.css']
            moduleId: comPath + '/weather.component',
            templateUrl: './weather.component.html',
            styleUrls: ['./weather.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map