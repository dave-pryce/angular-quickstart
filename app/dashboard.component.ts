import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';

@Component ({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `<h3>My Dashboard</h3>`
})

export class DashboardComponent implements OnInit {
  languages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getLanguages()
      .then(languages => this.languages = languages.slice(1,5));
  }

  gotoDetail(language: Language): void {}
}
