import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {UserDetailsComponent} from './user-details/user-details.component';
import {UsersResolveService} from "./services/users-resolve.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UsersResolveService,
    UserService
  ]
})
export class UserModule {
}
