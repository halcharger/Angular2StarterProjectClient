import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';


@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http:Http) { }

  login(username, password){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let requestOptions = new RequestOptions({headers: headers});
    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    
    return this.http.post(environment.apiBaseUrl + 'api/token', data, requestOptions)
                    .map(r => {
                        let token = r.json() && r.json().access_token;
                        if (token){
                          localStorage.setItem('id_token', token);
                        }
                    });
  }

  getLoggedOnUser(){
    let decodedToken = this.getDecodedToken();
    return {
      id: decodedToken['user.id'],
      username: decodedToken['user.username'],
      email: decodedToken['user.email'],
      roles: decodedToken.roles
    };
  }

  private getDecodedToken(){
    return this.jwtHelper.decodeToken(this.getJwt());
  }

  private getJwt(){
    return localStorage.getItem('id_token');
  }

  logout(){
    localStorage.removeItem('id_token');
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

}
