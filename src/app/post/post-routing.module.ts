import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostsResolveService} from "./services/posts-resolve.service";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {PostInfoResolveService} from "./services/post-info-resolve.service";

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {postsData: PostsResolveService}, children: [
      {path: ':id', component:PostDetailsComponent, resolve: {postInfo: PostInfoResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
