import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { LanguageDetailComponent } from './language-detail.component';
import { LanguagesComponent } from './languages.component';
import { LanguageService } from './language.service';

@NgModule({
  imports:      [
  BrowserModule,
  FormsModule,

  // routes
  RouterModule.forRoot([
    {
        path: '',
        rediredtTo: '/dashboard',
        pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'languages',
      component: LanguagesComponent
    },
    {
      path: 'detail/:id',
      component: LanguageDetailComponent
    }

  ])


],

  declarations: [
  AppComponent,
  DashboardComponent,
  LanguageDetailComponent,
  LanguagesComponent,
  ],

  proivders: [
  LanguageService
  ],

  bootstrap:    [ AppComponent ]
})



export class AppModule { }
