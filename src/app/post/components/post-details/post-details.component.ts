import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.post = value.postInfo);
  }

}
