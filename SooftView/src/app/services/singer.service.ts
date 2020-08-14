import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Singer} from '../classes/singer';

@Injectable({
  providedIn: 'root'
})
export class SingerService {
  public url = '/api/Singer';
  constructor(readonly http: HttpClient) { }

  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }

  Post(user: Singer){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
}
