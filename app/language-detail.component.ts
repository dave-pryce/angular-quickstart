import { Component, Input} from '@angular/core';
import { Language } from './language';

@Component ({
  selector: 'my-language-detail',
  template: `
  <div *ngIf="language" class="languageHeading">
  <h2>Language Details: <strong>{{language.name}}</strong></h2>
  <div class="formDetail">
  <div><label>id: </label>{{language.id}}</div>
  <div><label>name: </label>
  <input [(ngModel)]="language.name" placeholde="language name">
  </div>
  </div>
  </div>
  `
})
export class LanguageDetailComponent {
  @Input()
  language: Language;
}
