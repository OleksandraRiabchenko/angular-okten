import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-okten';

  // Розгорнута структура запису!!!

// private userService: UserService;
//
//   constructor(userService:UserService) {
//     this.userService = userService;
//     this.userService.doSomeStuff();
//   }

  // Коротка форма запису
  // constructor(private userService: UserService) {
  //   this.userService.doSomeStuff()
  // }

}
