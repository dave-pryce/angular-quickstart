import { Component } from '@angular/core';


@Component ({
  //moduleId: module.id,
  selector: 'my-app',
  template:
  `<div class="heading">
  <h1>Second Angular 2 App</h1>
  <h2> {{title}} </h2>
  </div>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/languages" routerLinkActive="active">Languages</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['app/app.component.css']
})


export class AppComponent {
  title = 'Programming Languages';
}
