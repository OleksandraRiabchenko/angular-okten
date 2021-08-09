import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../models/IUser";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUserById(id).subscribe(value => this.user = value)
    })
  }

  //todo не спрацьовує при першому натисканні на кнопку, Що роблю не так? можливо потрібна якась умова?
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(() => {
  //     this.user = this.router.getCurrentNavigation()?.extras.state as IUser
  //   })
  // }


}
