import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {SingerService} from '../services/singer.service';
import {GenderService} from '../services/gender.service';
import {SongService} from '../services/song.service';
import {Gendersong} from '../Classes/gendersongso';
import { FormBuilder } from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-addgendersong',
  templateUrl: './addgendersong.component.html',
  styleUrls: ['./addgendersong.component.css']
})
export class AddgendersongComponent implements OnInit {
  gendersong = new Gendersong();
  errorcreate: any;
  genders: any;
  singer: any;
  songs: any;
  public load: boolean;
  id: any;
  messegeexitos: any;
  constructor(
    private singerser: SingerService,private genderser: GenderService,
    private songser: SongService,private rutaActiva: ActivatedRoute, 
    private router: Router,public fb: FormBuilder) { 
      
    }
    oppoSuitsForm = this.fb.group({
      name: ['']
    })
  ngOnInit(): void {
    debugger;
    this.id =this.rutaActiva.snapshot.params.idSinger
    this.GetSinger();
    this.GetGender();
    this.GetSong();
  }
  CreateUser(){
let val = $('.selectsong').val();
    if ($('.selectgender').val() === '' || $('.selectgender').val() === null || $('.selectgender').val() === 'Seleccionar un genero') {
      $('.error_gender').html('Debe seleccionar un genero');
      return false;
    }
    else  if ($('.selectsong').val() === '' || $('.selectsong').val() === null || $('.selectsong').val() === 'Seleccionar una cancion') {
      $('.error_song').html('Debe seleccionar una canción');
      return false;
    }
    else {
      this.gendersong = new Gendersong();
      this.gendersong.idSong = $('.selectsong').val();
      this.gendersong.idGender = $('.selectgender').val();
      this.gendersong.idSinger = this.id;
      this.gendersong.idGenderSonf = 0;
      this.gendersong.state = 1;

      this.singerser.PostGenderSong(this.gendersong)
      .subscribe((data: any) => {
        debugger;
        this.messegeexitos = 'El cantante fue dado de alta con el codigo de exito ' + data + '\n En breve se rediccionara a la pagina principal',
        this.LoadCreate(true);
        this.LoadDataObject();
      },
        (err: HttpErrorResponse) => {
          debugger;
          if (err.error.ExceptionMessage === 'Ya Esta ese genero')
          {
            this.errorcreate = 'Ya existe ese genera para ese cantante';
          }
          else if (err.error.ExceptionMessage === 'Ya Esta esa cancion')
          {
            this.errorcreate = 'Ya existe ese genera para esa cancion';
          }
          else{
            this.errorcreate = 'No se puede crear el cantante';
          }
        });
    }
  }

  GetSinger(){
    this.singerser.GetById(this.id).
      subscribe((data: any) => {
        if(data !== null){
          this.singer = data;
        }
      });
  }

GetGender(){
    const filter = '?state=1';
    this.genderser.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.genders = data;
        }
      });
  }
  
  GetSong(){
    const filter = '?state=1';
    this.songser.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.songs = data;
        }
      });
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
      this.router.navigate(['/listsinger']);
    }, 5000);
   }
}
