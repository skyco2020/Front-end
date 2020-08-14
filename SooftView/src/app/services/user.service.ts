import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = '/api/User';
  constructor(readonly http: HttpClient) { }

  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }
  // tslint:disable-next-line: typedef
  Authentication(filters: string){
    const conect = `/api/Login${filters}`;
    return this.http.get(conect);
  }

  Post(user: User){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
}
