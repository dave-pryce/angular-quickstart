import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Language } from './language';
import { LanguageService } from './language.service';

@Component ({
  //moduleId: module.id,
  selector: 'my-language-detail',
  templateUrl: '/app/language-detail.component.html',
  stylesUrls: ['app/language-detail.component.css']
})



export class LanguageDetailComponent implements OnInit {
  @Input() language: Language;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.languageService.getLanguage(id)
      .then(language => this.language = language);
    });
  }

   goBack(): void {
      this.location.back();
    }
}
