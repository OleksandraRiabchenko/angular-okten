import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  // constructor(private postService: PostService,
  //             private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(({id}) => {
  //     this.postService.getPostById(id).subscribe(value => this.post = value)
  //   })
  // }

  constructor(private router: Router) {
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
  }

  ngOnInit(): void {
  }

}
