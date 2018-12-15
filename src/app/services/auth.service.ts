import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';


import { UserInterface } from "../models/user-interface";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  header: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    "Content-Type": "application/json",
    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
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
    } 
    );
  }

  setToken(token: string): void{
    localStorage.setItem("token", token)
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
    const url_api = "http://127.0.0.1:8000/api/logout";
    this.http.get(url_api, {headers: this.header});
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }

}
