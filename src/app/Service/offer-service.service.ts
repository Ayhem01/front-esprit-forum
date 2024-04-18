import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  private apiUrl ='http://localhost:1920/O/getoffers'
  constructor(private http: HttpClient) { }
  getOffers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  private durl ='http://localhost:1920/O/deleteoffer?id='
  deleteOffer(offerId: any): Observable<any> {
    console.log(offerId);
    return this.http.delete<any>(`${this.durl}${offerId}`);
  }

  private modifyUrl= 'http://localhost:1920/O/updateoffer'
  modifyOffer(offerId: number,ForumRequet: any): Observable<any> {
    console.log(ForumRequet);
    return this.http.post(`${this.modifyUrl}/${offerId}`  , 
    ForumRequet);
  }
  private BackUrl='http://localhost:1920/O/addoffer'
  addoffer(ForumRequet: any) {
    console.log(ForumRequet);
    
    return this.http.post(`${this.BackUrl}` , 
    ForumRequet);
  }
  private statUrl = 'http://localhost:1920/O/statusStatistics'; 
  getApplicationStatusStatistics(): Observable<any> {
    return this.http.get<any>(this.statUrl);
  
  }
}
