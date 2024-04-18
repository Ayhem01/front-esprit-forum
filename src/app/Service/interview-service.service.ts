import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewServiceService {

  constructor(private http: HttpClient) { }

  private BackUrl='http://localhost:1920/Interview/addInterview'
  addInterview(ForumRequet: any) {
    console.log(ForumRequet);
    
    return this.http.post(`${this.BackUrl}` , 
    ForumRequet);
  }
  private apiUrl ='http://localhost:1920/Interview/getInterviews'
  getInterviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  private ooUrl ='http://localhost:1920/Interview/getInterviewsStudentId'
  getInterviewsStudentId(): Observable<any> {
    return this.http.get<any>(this.ooUrl);
  }
}
