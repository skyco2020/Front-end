import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Song} from '../classes/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public url = '/api/Song';
  constructor(readonly http: HttpClient) { }
  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }

  Post(user: Song){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
}
