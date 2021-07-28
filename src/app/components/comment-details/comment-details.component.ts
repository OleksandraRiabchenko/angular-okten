import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models/IComment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentServise:CommentService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentServise.getCommentById(id).subscribe(value => this.comment = value)
    })
  }

  ngOnInit(): void {
  }

}
