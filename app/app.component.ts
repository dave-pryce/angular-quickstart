import { Component } from '@angular/core';
import { Language} from './language';
import { LanguageService } from '/languageService';

@Component({
  selector: 'my-app',
  template: `<h1 class="hero">My second Angular 2 App</h1>
  <table>
    <tr>
    <th>Language - Polyglot </th>
    </tr>
    <tr>
    <td> Java </td>
    </tr>
  </table>`
})

//constructor(private languageService: LanguageService) {}

//ngOnInit() {
//  this.languageService.getLanguages()
//    .subscribe(data => this.languages = data);
//}

export class AppComponent { }
