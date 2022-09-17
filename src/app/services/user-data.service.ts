import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  user(){
    return this.http.get(this.url);
    
  }
}
