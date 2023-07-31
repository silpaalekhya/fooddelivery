import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private baseUrl="http://localhost:8080/login";

  constructor(private httpClient:HttpClient) { }
  userLogin(login:Login):Observable<object>{

    console.log(login);
    return this.httpClient.post(`${(this.baseUrl)}`,login);
  }
}
