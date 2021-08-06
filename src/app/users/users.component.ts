import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models/IUser";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users: IUser[];
@Input()
user: IUser
  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  showInfo(tref: HTMLFormElement) {
    console.log(tref.user.value)
  }


}
