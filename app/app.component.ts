import { Component } from '@angular/core';


@Component ({
  selector: 'my-app',
  template:
  `<div class="heading">
  <h1>Second Angular 2 App</h1>
  <h2> {{title}} </h2>
  </div>
  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/languages">Languages</a>
  </nav>
  <router-outlet></router-outlet>`
})


export class AppComponent {
  title = 'Programming Languages';
}
