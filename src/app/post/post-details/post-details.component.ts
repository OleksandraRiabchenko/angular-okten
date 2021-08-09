import { Component, OnInit } from '@angular/core';
import {IPost} from "../models/IPost";
import {PostService} from "../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost;
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  //todo підкажи будь ласка що я роблю не так з resolve
  // ngOnInit(): void {
  //   this.activatedRoute.data.subscribe(value => this.post = value.postInfo)
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostById(id).subscribe(value => this.post=value)
    })
  }


}
