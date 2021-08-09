import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../models/IPost";
import {Observable} from "rxjs";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]>{

  constructor(private postServise: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postServise.getAllPosts();
  }

}
