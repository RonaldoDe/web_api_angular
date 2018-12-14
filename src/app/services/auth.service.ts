import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';


import { UserInterface } from "../models/user-interface";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(name: string, email: string, password: string){
    const url_api = "http://127.0.0.1:8000/api/register";
    return this.http.post<UserInterface>(url_api, {
        name: name,
        email:email, 
        password:password
      }, 
      { headers: this.headers }
      ).pipe(map(data => data));
  }

  loginUser(username: string, password: string): Observable<any>{
    const url_api = "http://127.0.0.1:8000/api/login";
    return this.http.post<UserInterface>(url_api, {
      username, 
      password
    }, 
    {headers: this.headers}).pipe(map(data => data));
  }

  setToken(token): void{
    localStorage.setItem("token", token)
  }

  setUser(user:UserInterface): void{
    let user_string = JSON.stringify(user);
    localStorage.setItem("CurrentUser", user_string);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getCurrentUser():UserInterface{
    let user_string = localStorage.getItem("CurrentUSer");
    if(!isNullOrUndefined(user_string)){
        let user: UserInterface = JSON.parse(user_string);
        return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    let accessToken = localStorage.getItem('token');
    const url_api = "http://127.0.0.1:8000/api/logout";
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    return this.http.post<UserInterface>(url_api, {headers: this.headers})
  }

}
