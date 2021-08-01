import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export const routes: Routes = [
  {path: '', component:PostsComponent, canDeactivate: []},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'posts', redirectTo: '', pathMatch: 'full'}
]
