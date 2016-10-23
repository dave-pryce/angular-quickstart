import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { LanguageDetailComponent } from './language-detail.component';

@NgModule({
  imports:      [ BrowserModule,
  FormsModule ],

  declarations: [ AppComponent,
   LanguageDetailComponent
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
