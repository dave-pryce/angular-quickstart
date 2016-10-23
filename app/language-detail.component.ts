import { Component, Input} from '@angular/core';

@Component ({
  selector: 'my-language-detail',
  template: `
  <div *ngIf="selectedLanguage" class="languageHeading">
  <h2><strong>{{selectedLanguage.name}}</strong></h2>
  <div><label>id: </label>{{selectedLanguage.id}}</div>
  <div><label>name: </label>
  <input [(ngModel)]="selectedLanguage.name" placeholde="language name">
  </div>
  </div>
  `
})
export class LanguageDetailComponent {

}
