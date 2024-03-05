import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:1920"
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private commentEndpoint= baseUrl + "/comment"
  constructor(private http:HttpClient) {}

  public addComment(comment:any, idP:any, idU:any) {
     console.log(comment);
      return this.http.post<any>(`${this.commentEndpoint}/addComment/${idP}/${idU}`,comment)
    }
}



