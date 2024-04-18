import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {

  constructor(private http: HttpClient) { }
  private BackUrl='http://localhost:1920/Salle/addSalle'
  addSalle(ForumRequet: any) {
    console.log(ForumRequet);
    
    return this.http.post(`${this.BackUrl}` , 
    ForumRequet);
  }
  private apiUrl ='http://localhost:1920/Salle/getSalles'
  fetchRooms(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  private modifyUrl= 'http://localhost:1920/Salle/updateSalle'
  modifySalle(roomId: number,ForumRequet: any): Observable<any> {
    console.log(ForumRequet);
    return this.http.post(`${this.modifyUrl}/${roomId}`  , 
    ForumRequet);
  }
  private detUrl ='http://localhost:1920/Salle/getSalle'
  getSalle(id:number): Observable<any>{
    return this.http.get<any>(`${this.detUrl}/${id}`);
  }
  private durl ='http://localhost:1920/Salle/deleteSalle?id='
  deleteroom(id: any): Observable<any> {
    console.log(id);
    return this.http.delete<any>(`${this.durl}${id}`);
  }

}
