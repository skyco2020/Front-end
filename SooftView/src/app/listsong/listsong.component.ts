import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Song} from '../Classes/song';
import { Router } from '@angular/router';
import {SongService} from '../services/song.service';

@Component({
  selector: 'app-listsong',
  templateUrl: './listsong.component.html',
  styleUrls: ['./listsong.component.css']
})
export class ListsongComponent implements OnInit {
  song = new Song();
  errorcreate: any;
  songs: any;
  public load: boolean;
  messegeexitos: any;
  constructor(private singerser: SongService, private router: Router) { }

  ngOnInit(): void {
    const filter = '?state=1';
    this.singerser.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.songs = data;
        }
      });
  }

}
