import { Component } from '@angular/core';
import { Language } from './language';
//import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';


//export class Language {
//  id: number;
//  name: string;
//}



@Component({
  selector: 'my-app',
  template: `
  <div class="heading">
  <h1>Second Angular 2 App</h1>
  <h2> {{title}} </h2>
  </div>
  <h3>{{language.name}} <h3>
  <div><label>id: </label>{{language.id}}</div>
  <div><label>name: </label>
  <input [(ngModel)]="language.name" placeholde="language">
  <div>

  `//,
  //providers:[LanguageService, HTTP_PROVIDERS]
})

export class AppComponent {
  title = 'Programming Languages';
  language: Language = {
    id: 1,
    name : 'HTML'
  };
}
