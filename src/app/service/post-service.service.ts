import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
private host="http://localhost:1920/post"
  constructor(private http:HttpClient) { }
  public getAllPost():Observable<any>{
  return this.http.get(this.host+"/getPosts")
  }
  public addPost(post:any): Observable<any>{
  return this.http.post<any>(this.host+"/addPost/1",post)
  }
  public deletePost(id:any): Observable<void> {
  console.log(id);
    return this.http.delete<void>(this.host+"/deletePost/"+id);
  }

}
