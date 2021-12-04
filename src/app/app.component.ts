import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search Member';

  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.startsWith('/SearchMember')) {
          this.title = 'Search Member';
        } else if (this.router.url.startsWith('/SearchResult')) {
          this.title = 'Search Result';
        } else {
          this.title = 'Menu';
        }
      }
    });
  }
}
