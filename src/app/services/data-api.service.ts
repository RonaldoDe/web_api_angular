import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


import { BookInterface } from "../models/book-interface";
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  books: Observable<any>;
  book: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) { }
  headers: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    "Content-Type": "application/json",
    Authorization: 'Bearer' + ' ' + this.authService.getToken()
  });

  getAllBooks(){
    const url_api = 'http://127.0.0.1:8000/api/';
    return this.http.get(url_api, {headers: this.headers});
  }
  //https://pokeapi.co/api/v2/pokemon/1/
  getBookById(id: string){
    const url_api = `http://127.0.0.1:8000/api/post/${id}/`;
    return this.http.get(url_api, {headers: this.headers});
  }

  getOffers(){
    const url_api = `http://127.0.0.1:8000/api/offerts`;
    return this.http.get(url_api, {headers: this.headers});
  }

  saveBook(book: BookInterface){
    let token = this.authService.getToken();
    const url_api = "http://127.0.0.1:8000/api/save";
    return this.http.post<BookInterface>(url_api, book, {headers: this.headers}).pipe(map(data => data));
  }

}
