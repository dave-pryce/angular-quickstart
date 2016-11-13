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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var mock_languages_1 = require('./mock-languages');
var LanguageService = (function () {
    function LanguageService(http) {
        this.http = http;
        this.languagesUrl = 'app/languages'; // url to api
    }
    LanguageService.prototype.getLanguages = function () {
        return Promise.resolve(mock_languages_1.LANGUAGES);
        //return this.http
        //      .get(this.languagesUrl)
        //      .toPromise()
        //      .then(response => response.json().data as Language[]);
        //.catch(this.handleError);
    };
    LanguageService.prototype.getLanguage = function (id) {
        return this.getLanguages()
            .then(function (languages) { return languages.find(function (language) { return language.id === id; }); });
    };
    LanguageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
//# sourceMappingURL=language.service.js.map