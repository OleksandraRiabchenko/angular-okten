import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {IUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getAllUsers();
  }


}
