"use strict";
const core_1 = require('@angular/core');
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
// import {AppComponent} from './app.component';
const skeleton_component_1 = require('./skeleton/skeleton.component');
platform_browser_dynamic_1.bootstrap(skeleton_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=main.js.map