import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserWithPostsComponent} from "../components/user-with-posts/user-with-posts.component";


export const routes: Routes = [
  {path: 'users', component: UsersComponent, children: [
      // {path: ':id/user-with-posts', component: UserWithPostsComponent}
      {path: ':id/user-with-posts', component: UserWithPostsComponent}
    ]},
  // {path: 'user-with-posts', component: PostComponent}
//todo не забути
]
