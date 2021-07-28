import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.scss']
})
export class UserWithPostsComponent implements OnInit {
  @Input()
  user: IUser;
  @Input()
  posts:IPost[];

  constructor(private activatedRoute:ActivatedRoute,
              private userService: UserService,
              private postService:PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUserById(id).subscribe(value => this.user = value);
      this.postService.getPostsOfUser(id).subscribe(value => this.posts = value)
      })
    }

  ngOnInit(): void {
  }

}
