"use strict";
var router_1 = require("@angular/router");
var languages_component_1 = require('./languages.component');
exports.routes = [
    { path: '/', component: languages_component_1.LanguageComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map