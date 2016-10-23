import { Component } from '@angular/core';
import { Language } from './language';
//import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';



const LANGUAGES: Language[] = [
    {"id" : 1,"name" : "Java"},
    {"id" : 2,"name" : "HTML"},
    {"id" : 3,"name" : "Ruby On Rails"},
    {"id" : 4,"name" : "CSS"}
];




@Component({
  selector: 'my-app',
  template: `
  <div class="heading">
  <h1>Second Angular 2 App</h1>
  <h2> {{title}} </h2>
  </div>

  <div *ngIf="selectedLanguage" class="languageHeading">
  <h2><strong>{{selectedLanguage.name}}</strong></h2>
  <div><label>id: </label>{{selectedLanguage.id}}</div>
  <div><label>name: </label>
  <input [(ngModel)]="selectedLanguage.name" placeholde="language name">
  </div>
  </div>




  <div class="languagelist">
  <div class="languages">
  <h2>Languages I Know </h2>
  <ul>
    <li *ngFor="let language of languages"
    [class.selected]="language === selectedLanguage"
    (click)="onSelect(language)">
    <span class="badge">{{language.id}}</span> {{language.name}}
    </li>
  </ul>
  </div>
  </div>`
  //,
  //providers:[LanguageService, HTTP_PROVIDERS]
})



export class AppComponent {
  title = 'Programming Languages';
  languages = LANGUAGES;
  selectedLanguage : Language;

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }
}
