import {Component, OnInit} from '@angular/core';

import {IUser} from "../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //users: IUser[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }
}
