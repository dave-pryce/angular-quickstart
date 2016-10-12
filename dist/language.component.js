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
var languageService_1 = require('./languageService');
var LanguagesComponent = (function () {
    function LanguagesComponent(languageService) {
        this.languageService = languageService;
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.getLanguages()
            .subscribe(function (data) { return _this.languages = data; });
    };
    LanguagesComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 class=\"hero\">My second Angular 2 App</h1>\n  <table>\n    <tr>\n    <th>Language - Polyglot </th>\n    </tr>\n    <tr>\n    <td> Java </td>\n    </tr>\n  </table>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof languageService_1.LanguageService !== 'undefined' && languageService_1.LanguageService) === 'function' && _a) || Object])
    ], LanguagesComponent);
    return LanguagesComponent;
    var _a;
}());
exports.LanguagesComponent = LanguagesComponent;
//# sourceMappingURL=language.component.js.map