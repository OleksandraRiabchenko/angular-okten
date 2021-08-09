import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../models";


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
      this.router.getCurrentNavigation()?.extras.state
        ? this.user = this.router.getCurrentNavigation()?.extras.state as IUser
        : this.userService.getUserById(id).subscribe(value => this.user = value);
    })
  }
}
