import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Language } from './language';

import { LanguageService } from './language.service';

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



export class LanguageDetailComponent implements OnInit {
  @Input() language: Language;

  ngOnInit(): void {}
}
