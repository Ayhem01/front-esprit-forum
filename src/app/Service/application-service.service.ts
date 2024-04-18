import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {
  
  constructor(private http: HttpClient) { }
  private BackUrl='http://localhost:1920/A/addApplication'
  addApplication(offerId: number, formData: FormData) {
    return this.http.post(`${this.BackUrl}/${offerId}`, formData);
  }
  private modUrl='http://localhost:1920/A/updateApplication'
  modyfyApplication(Id: number, formData: FormData) {
    return this.http.post(`${this.modUrl}/${Id}`, formData);
  }
  private statusUrl='http://localhost:1920/A/GestionStatus'
  GestionStatus(id: number,ForumRequet: any) {
    return this.http.post(`${this.statusUrl}/${id}`,ForumRequet);
  }
  private apiUrl ='http://localhost:1920/A/getApplications'
  getApplications(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  private durl ='http://localhost:1920/A/deleteApplication?id='
  deleteApplication(Id: any): Observable<any> {
    console.log(Id);
    return this.http.delete<any>(`${this.durl}${Id}`);
  }
  private idUrl ='http://localhost:1920/A/getApplicatiosByOfferId'
  getApplicationsByOfferId(id:number): Observable<any>{
    return this.http.get<any>(`${this.idUrl}/${id}`);
  }
  private appUrl ='http://localhost:1920/A/getApplication?id='
  getApplication(id:number): Observable<any>{
    return this.http.get<any>(`${this.appUrl}${id}`);
  }
  private upUrl ='http://localhost:1920/A/upload'
  getFileDownloadUrl(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${this.upUrl}`, formData);
  }
}