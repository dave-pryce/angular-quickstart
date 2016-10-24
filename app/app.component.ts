import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';

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


export class AppComponent implements OnInit {
  title = 'Programming Languages';
  languages: Language[];
  selectedLanguage : Language;

constructor (private languageService: LanguageService) { }


  getLanguages(): void {
    this.languageService.getLanguages().then(languages => this.languages = languages);
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }
}
