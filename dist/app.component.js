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
//import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';
var LANGUAGES = [
    { "id": 1, "name": "Java" },
    { "id": 2, "name": "HTML" },
    { "id": 3, "name": "Ruby On Rails" },
    { "id": 4, "name": "CSS" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Programming Languages';
        this.languages = LANGUAGES;
    }
    AppComponent.prototype.onSelect = function (language) {
        this.selectedLanguage = language;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"heading\">\n  <h1>Second Angular 2 App</h1>\n  <h2> {{title}} </h2>\n  </div>\n\n  <div *ngIf=\"selectedLanguage\" class=\"languageHeading\">\n  <h2><strong>{{selectedLanguage.name}}</strong></h2>\n  <div><label>id: </label>{{selectedLanguage.id}}</div>\n  <div><label>name: </label>\n  <input [(ngModel)]=\"selectedLanguage.name\" placeholde=\"language name\">\n  </div>\n  </div>\n\n\n\n\n  <div class=\"languages\">\n  <h2>Languages I Know </h2>\n  <ul>\n    <li *ngFor=\"let language of languages\"\n    [class.selected]=\"language === selectedLanguage\"\n    (click)=\"onSelect(language)\">\n    <span class=\"badge\">{{language.id}}</span> {{language.name}}\n    </li>\n  </ul>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map