import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {SingerService} from '../services/singer.service';

@Component({
  selector: 'app-detailsinger',
  templateUrl: './detailsinger.component.html',
  styleUrls: ['./detailsinger.component.css']
})
export class DetailsingerComponent implements OnInit {
  SingerGenders: any;
  singer: any;
  constructor(
    private singerser: SingerService,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.singerser.GetById(this.rutaActiva.snapshot.params.idSinger).
    subscribe((data: any) => {
      if(data !== null){
        this.singer = data;
      }
    });
    this.GetAllDetail();
  }

  GetAllDetail(){
    const filter = '?id='+ this.rutaActiva.snapshot.params.idSinger;
    this.singerser.GetAllDetail(filter).
    subscribe((data: any) => {
      if(data !== null){
        debugger;
        this.SingerGenders = data;
      }
    });
  }

}
