import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';

import { Router } from '@angular/router';

@Component({
  //moduleId: module.id,
  selector: 'my-languages',
  templateUrl: '/app/languages.component.html',
  styleUrls: ['app/languages.component.css']
  ,
  providers: [LanguageService]
})


export class LanguagesComponent implements OnInit {
  languages: Language[];
  selectedLanguage : Language;

constructor (
  private router: Router,
  private languageService: LanguageService) { }


  getLanguages(): void {
    this.languageService.getLanguages().then(languages => this.languages = languages);
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedLanguage.id]);
  }

}
