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
var core_1 = require("@angular/core");
//import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';
//export class Language {
//  id: number;
//  name: string;
//}
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Programming Languages';
        this.language = {
            id: 1,
            name: 'HTML'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"heading\">\n  <h1>Second Angular 2 App</h1>\n  <h2> {{title}} </h2>\n  </div>\n  <h3>{{language.name}} <h3>\n  <div><label>id: </label>{{language.id}}</div>\n  <div><label>name: </label>\n  <input [(ngModel)]=\"language.name\" placeholde=\"language\">\n  <div>\n\n  " //,
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map