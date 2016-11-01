import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { LanguageDetailComponent } from './language-detail.component';
import { LanguagesComponent } from './languages.component';
import { LanguageService } from './language.service';

import { AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
],
  declarations: [
    AppComponent,
    DashboardComponent,
    LanguageDetailComponent,
    LanguagesComponent,
  ],
  providers: [LanguageService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
