import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { LanguageDetailComponent } from './language-detail.component';
import { LanguagesComponent } from './languages.component';
import { LanguageService } from './language.service';

import { AppRoutingModule} from './app-routing.module';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from '/angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,

// mock web server
InMemoryWebApiModule.forRoot(InMemoryDataService),

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
