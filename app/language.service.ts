import { LANGUAGES } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Language } from './language';
import 'rxjs/add/operator/map';

console.log('Language service running');

@Injectable()
  export class LanguageService {

    constructor(private http: Http) {}

    getLanguages(){
      return this.http.get('app/language.json')
      .map(response => <Language[]>response.json().languageData);
    }
  }
