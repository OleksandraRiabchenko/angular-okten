import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {PostDeactivatorService} from "../services/post-deactivator.service";
import {PostActivatorService} from "../services/post-activator.service";

export const routes: Routes = [
  {path: '', component:PostsComponent, canDeactivate: [PostDeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostActivatorService], canDeactivate: [PostDeactivatorService]},
  {path: 'posts', redirectTo: '', pathMatch: 'full'}
]
