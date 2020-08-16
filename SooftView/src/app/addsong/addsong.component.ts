import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Song} from '../Classes/song';
import { Router } from '@angular/router';
import {SongService} from '../services/song.service';
declare var $: any;
@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
  song = new Song();
  errorcreate: any;
  public load: boolean;
  messegeexitos: any;
  constructor(private songser: SongService, private router: Router) { }

  ngOnInit(): void {
  }
  CreateUser(SingerName){

    if (SingerName === '' || SingerName === null || SingerName === undefined) {
      $('.error_username').html('Ingresa nombre de la cancion');
      return false;
    }
    else {
      // this.singer = new Singer();
      this.song.name = SingerName,
      this.song.state = 1;
      this.song.creationDate = new Date();
      this.song.finalDate = new Date();

      this.songser.Post(this.song)
      .subscribe((data: any) => {
        this.messegeexitos = 'La cancion fue dada de alta con el codigo de exito ' + data + '\n En breve se rediccionara a la pagina principal',
        this.LoadCreate(true);
        this.LoadDataObject();
      },
        (err: HttpErrorResponse) => {
          debugger;
          if (err.error.ExceptionMessage === '400')
          {
            this.errorcreate = 'Ya existe una cancion con ese nombre';
          }
          else{
            this.errorcreate = 'No se puede crear el cantante';
          }
        });
    }
  }
  // tslint:disable-next-line: typedef
  HideMessage(msg) {
    $('.' + msg).html('');
    this.errorcreate = undefined;
  }
  LoadCreate(val){
    setTimeout(() => {
      this.load = val;
    }, 0);
   }
   LoadDataObject(){
    setTimeout(() => {
      this.LoadCreate(false);
      this.router.navigate(['/listsong']);
    }, 5000);
   }
}
