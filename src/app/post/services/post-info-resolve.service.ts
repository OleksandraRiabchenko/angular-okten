import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostInfoResolveService implements Resolve<any>{


  constructor(private postService:PostService,
              private activatedRoute: ActivatedRoute) { }


  //todo підкажи, будь ласка, що я роблю не так, як отримати id (багато різних костилів перепробувала)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostById(id)
    })

  }


}
