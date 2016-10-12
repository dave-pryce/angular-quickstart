import { Component } from '@angular/core';
import { Language} from './language';
import { LanguageService } from './language.service';

@Component({
  selector: 'my-languages',
  template: `<table>
    <tr>
    <th>Language - Polyglot </th>
    </tr>
    <tr *ngFor="let langauage of languages">
    <td>{{language.id}}</td>
    <td>{{language.name}}</td>
    </tr>
  </table>`
})

export class LanguagesComponent {
  languages : Language[];


constructor(private languageService: LanguageService) { }

ngOnInit() {
  this.languageService.getLanguages()
    .subscribe(data => this.languages = data);
}

}
