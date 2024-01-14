import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials:any){
    return this.http.post(environment.login, credentials);
  }

  signup(user:any){
    return this.http.post(environment.signup, user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  setSession(token: string){
    localStorage.setItem('token', token);
  }

  
}
