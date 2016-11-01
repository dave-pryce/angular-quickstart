import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { LanguageService } from './language.service';

import { Router } from '@angular/router';

@Component ({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '/app/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  languages: Language[] = [];

  constructor(
    private languageService: LanguageService,
    private router: Router) {
      
    }

  ngOnInit(): void {
    this.languageService.getLanguages()
      .then(languages => this.languages = languages.slice(1,5));
  }

  gotoDetail(language: Language): void {
    let link = ['/detail', language.id];
    this.router.navigate(link);
  }
}
