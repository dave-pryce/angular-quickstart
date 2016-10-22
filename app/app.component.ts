import { Component } from '@angular/core';
//import { LanguageService } from './language.service';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { LanguageComponent } from './languages.component';


export class Language {
  id: number;
  name: string;
}

language: Language = {
  id: 1,
  name: 'Ruby'
};




@Component({
  selector: 'my-app',
  template: `
  <h1 class="heading">Second Angular 2 App</h1>
  <h2> {{title}} </h2>
  <p> {{language.name}} </p>

  `//,
  //providers:[LanguageService, HTTP_PROVIDERS]
})

export class AppComponent {
  title = 'Languages';
}
