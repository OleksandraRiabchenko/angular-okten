import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";

import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostInfoResolveService, PostsResolveService} from "./services";


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
