import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Singer} from '../Classes/singer';
import { Router } from '@angular/router';
import {SingerService} from '../services/singer.service';

@Component({
  selector: 'app-listsinger',
  templateUrl: './listsinger.component.html',
  styleUrls: ['./listsinger.component.css']
})
export class ListsingerComponent implements OnInit {
  usr = new Singer();
  errorcreate: any;
  singers: any;
  public load: boolean;
  messegeexitos: any;
  constructor(private singerser: SingerService, private router: Router) { }

  ngOnInit(): void {
    const filter = '?state=1';
    this.singerser.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.singers = data;
        }
      });
  }
  AddCenderSong(idSinger){

  }
}
