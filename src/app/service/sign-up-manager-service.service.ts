import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpManagerServiceService {

  baseUrl: any;

  getUserId(name:string ,id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(User: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, User);
  }

  // updateUser(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteUser(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  constructor(private http:HttpClient) { }
}
