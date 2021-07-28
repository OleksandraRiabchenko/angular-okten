import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basic.routes";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserWithPostsComponent } from './components/user-with-posts/user-with-posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserWithPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
