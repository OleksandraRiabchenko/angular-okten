import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import {PostService} from "./services/post.service";
import {PostsResolveService} from "./services/posts-resolve.service";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostInfoResolveService} from "./services/post-info-resolve.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostsResolveService,
    PostInfoResolveService
  ]
})
export class PostModule { }
