import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Language } from './language';
//import { LANGUAGES } from './mock-languages';

@Injectable()
export class LanguageService {

  private languagesUrl = 'http://localhost:8000/languages'; // url to api

  constructor( private http: Http) {}

  getLanguages(): Promise<Language[]> {
    //return Promise.resolve(LANGUAGES);
    return this.http
            .get(this.languagesUrl)
            .toPromise()
            .then(response => response.json().data as Language[]);
        //    .catch(this.handleError);
  }

  getLanguage(id: number) : Promise<Language> {
    return this.getLanguages()
    .then(languages => languages.find(language => language.id === id));
  }


}
