import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      //  /users/:id
      {path: ':id', component: UserDetailsComponent} // users component
    ]
  }, // app component
  // {path:'users/:id', component: UserDetailsComponent}, // app component
  {path: 'posts', component: PostsComponent}, // app component
];
