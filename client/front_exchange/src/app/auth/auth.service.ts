import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError, toArray } from 'rxjs';
import { map } from 'rxjs';
import { environment } from '../../environments/environments';


const API_PATH = environment.API_PATH;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:  Router, private http: HttpClient) { }

  register(details : Object):Observable<any>{
    return this.http.post(`${API_PATH}/register`, details);
  }

  login(details : Object): Observable<any>{
    console.log(`Production: ${environment.production}`)
    return this.http.post(`${API_PATH}/login`, details);
  }
}
