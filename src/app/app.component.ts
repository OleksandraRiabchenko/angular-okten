import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-okten-practice3';

  constructor(private router: Router) {
  }
  showUsers() {
    this.router.navigate(['users'])
  }

  showPosts() {
    this.router.navigate(['posts'])
  }
}
