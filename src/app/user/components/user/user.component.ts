import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  @Output()
  xxx: EventEmitter<IUser> = new EventEmitter<IUser>()

  constructor() {
  }

  ngOnInit(): void {
  }

  selectUser() {
    this.xxx.emit(this.user)
  }
}
