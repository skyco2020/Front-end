import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gender} from '../classes/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  public url = '/api/Gender';
  constructor(readonly http: HttpClient) { }

  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }

  Post(user: Gender){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
}
