import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient:HttpClient) {
  }

  getAllPosts():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this._url)
  }

  getPostById(id:number):Observable<IPost> {
    return this.httpClient.get<IPost>(this._url + '/' + id)
  }
}
