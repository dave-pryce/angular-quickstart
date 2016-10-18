import { Component } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';

console.log('Language component running');

@Component({
  selector: 'my-languages',
  templateUrl: 'app/languages.component.html'
})


export class LanguagesComponent {
  languages : Language[];


constructor(private languageService: LanguageService) { }

ngOnInit() {
  this.languageService.getLanguages()
    .subscribe(data => this.languages = data);
}

}
