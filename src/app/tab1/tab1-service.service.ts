import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tab1ServiceService {

  constructor(private http: HttpClient) { }

  getInfo(url:string){
    return this.http.get(url);
  }

  getID(url:string){
     return this.http.get(url);
  }

}
