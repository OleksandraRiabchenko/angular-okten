import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UsersResolveService} from "./services/users-resolve.service";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {usersData: UsersResolveService}, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
