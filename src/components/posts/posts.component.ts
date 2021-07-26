import { Component, OnInit } from '@angular/core';
import {IPost} from "../../app/models/IPost";
import {PostService} from "../../app/services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) {
    this.postService.getPost().subscribe(value => {
      this.posts = value
      console.log(this.posts)
    })
  }

  ngOnInit(): void {
  }

}
