import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  private baseUrl="http://localhost:8080/signup";

  constructor(private httpClient:HttpClient) { }
  userSignup(signup:Signup):Observable<object>{

    console.log(signup);
    return this.httpClient.post(`${this.baseUrl}`,signup);
  }
}