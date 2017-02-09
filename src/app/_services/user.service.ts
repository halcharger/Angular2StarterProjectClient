import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User} from '../_models/user';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(private http: Http, private authHttp: AuthHttp) { }

  getAll(){
    return this.authHttp.get(environment.apiBaseUrl + 'api/users').map(r => r.json());
  }

  register(user: User){
    return this.http.post(environment.apiBaseUrl + 'api/user/register', user).map(r => r.json());
  }

}
