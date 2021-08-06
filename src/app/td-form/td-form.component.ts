import { Component, OnInit } from '@angular/core';
import {IUser} from "../models/IUser";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TDFormComponent implements OnInit {

  users: IUser[];
  userInfo: IUser;
  userId: number;

  constructor(private userService: UserService,) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  showInfo() {
    this.userService.getUserById(this.userId).subscribe(value => this.userInfo = value)
  }

}
