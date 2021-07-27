import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;
  constructor(private activatedRoute: ActivatedRoute,
              private postServes: PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      return this.postServes.getPostById(id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {

  }

}
