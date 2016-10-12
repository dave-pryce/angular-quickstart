import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Language } from './language';
import 'rxjs/add/operator/map';

@Injectable()
  export class LanguageService {

    constructor(private http: Http) {}

    getLanguages(){
      return this.http.get('app/language.json')
      .map(response => <Language[]>response.json().languageData);
    }
  }
