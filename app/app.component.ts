import { Component } from '@angular/core';
import { LanguageService } from './language.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1 class="hero">My second Angular 2 App</h1>`,
  providers:[LanguageService, HTTP_PROVIDERS]
})

export class AppComponent { }
