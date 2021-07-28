import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient) {
  }
  getPostsOfUser(id:number):Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/' + id + '/posts')
  }
}
