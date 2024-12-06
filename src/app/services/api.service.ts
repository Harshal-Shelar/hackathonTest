import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private jsonUrl = 'http://localhost:5000/users';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  addDataToJson(newData: any) {
    return this.http.post('http://localhost:5000/login', newData); 
  }
}
