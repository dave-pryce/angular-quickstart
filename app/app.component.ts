import { Component } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';


constructor (private languageService: LanguageService) { }

languages: Languages[];

@Component({
  selector: 'my-app',
  template: `
  <div class="heading">
  <h1>Second Angular 2 App</h1>
  <h2> {{title}} </h2>
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
  </div>

  <my-language-detail [language]="selectedLanguage"></my-language-detail>
  `
  ,
  providers: [LanguageService]
})



export class AppComponent {
  title = 'Programming Languages';
  languages = LANGUAGES;
  selectedLanguage : Language;

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }
}
