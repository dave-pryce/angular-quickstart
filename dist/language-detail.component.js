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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var language_1 = require('./language');
var language_service_1 = require('./language.service');
var LanguageDetailComponent = (function () {
    function LanguageDetailComponent(languageService, route, location) {
        this.languageService = languageService;
        this.route = route;
        this.location = location;
    }
    LanguageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.languageService.getLanguage(id)
                .then(function (language) { return _this.language = language; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', language_1.Language)
    ], LanguageDetailComponent.prototype, "language", void 0);
    LanguageDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-language-detail',
            template: "\n  <div *ngIf=\"language\" class=\"languageHeading\">\n  <h2>Language Details: <strong>{{language.name}}</strong></h2>\n  <div class=\"formDetail\">\n  <div><label>id: </label>{{language.id}}</div>\n  <div><label>name: </label>\n  <input [(ngModel)]=\"language.name\" placeholde=\"language name\">\n  </div>\n  </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [language_service_1.LanguageService, router_1.ActivatedRoute, common_1.Location])
    ], LanguageDetailComponent);
    return LanguageDetailComponent;
}());
exports.LanguageDetailComponent = LanguageDetailComponent;
//# sourceMappingURL=language-detail.component.js.map