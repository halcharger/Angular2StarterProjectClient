import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User} from '../_models/user';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAll(){
    return this.http.get(environment.apiBaseUrl + 'api/users', this.jwt()).map(r => r.json());
  }

  register(user: User){
    return this.http.post(environment.apiBaseUrl + 'api/user/register', user).map(r => r.json());
  }

  private jwt(){
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }    
  }

}
