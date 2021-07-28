import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IComment} from "../models/IComment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private  httpClient: HttpClient) {

  }

  getAllComments():Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url);
  }

  getCommentById(id:number):Observable<IComment> {
    return this.httpClient.get<IComment>(this.url + '/' + id);
  }
}
