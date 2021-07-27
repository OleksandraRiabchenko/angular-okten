import {PostsComponent} from "../components/posts/posts.component";
import {Routes} from "@angular/router";
import {CommentsComponent} from "../components/comments/comments.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]},
  {path: 'comments', component: CommentsComponent}
]
