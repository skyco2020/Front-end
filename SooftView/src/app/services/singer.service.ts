import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Singer} from '../classes/singer';
import {Gendersong} from '../Classes/gendersongso';

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
  public GetById(id){
    const conect = `${this.url}/${id}`;
    return this.http.get(conect);
  }
  Post(user: Singer){
    const conect = `${this.url}`;
    return this.http.post(conect, user);
  }
  PostGenderSong(user: Gendersong){
    const conect = `${this.url}/AddGenderSong`;
    return this.http.post(conect, user);
  }

  public GetAllDetail(filters: string){
    const conect = `${this.url}/GetAllDetail${filters}`;
    return this.http.get(conect);
  }
  
}
