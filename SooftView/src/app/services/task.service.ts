import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usersoof} from '../classes/Usersoof';

@Injectable({
  providedIn: 'root'
})
export abstract class TaskService {
  public url = '/api/User';
  constructor(
    readonly http: HttpClient
  ) { }

  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }
  // tslint:disable-next-line: typedef
  Authentication(filters: string){
    const conect = `/api/Login${filters}`;
    return this.http.get(conect);
  }

  Post(user: Usersoof){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
}
