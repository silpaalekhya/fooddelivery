import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl="http://localhost:8080/user";
  constructor(private httpClient:HttpClient) { }

  userRegister(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${(this.baseUrl)}`,user);
  }
}