import { Component } from '@angular/core';
import { LanguageService } from './language.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { LanguageComponent } from './languages.component';


@Component({
  selector: 'my-app',
  template: `
  <h1 class="hero">My second Angular 2 App</h1>
  <main><my-languages></my-languages></main>
  `,
  providers:[LanguageService, HTTP_PROVIDERS]
})

export class AppComponent { }
