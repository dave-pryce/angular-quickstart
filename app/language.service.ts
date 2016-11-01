import { Injectable } from '@angular/core';

import { Language } from './language';
import { LANGUAGES } from './mock-languages';

@Injectable()
export class LanguageService {

  
  getLanguages(): Promise<Language[]> {
    return Promise.resolve(LANGUAGES);
  }

  getLanguage(id: number) : Promise<Language> {
    return this.getLanguages()
    .then(languages => languages.find(language => language.id === id));
  }


}
