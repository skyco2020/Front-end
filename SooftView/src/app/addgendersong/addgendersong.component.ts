import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import {GenderSong} from '../Classes/gendersong';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {SingerService} from '../services/singer.service';
import {GenderService} from '../services/gender.service';

declare var $: any;

@Component({
  selector: 'app-addgendersong',
  templateUrl: './addgendersong.component.html',
  styleUrls: ['./addgendersong.component.css']
})
export class AddgendersongComponent implements OnInit {
  // gendersong = new GenderSong();
  errorcreate: any;
  genders: any;
  public load: boolean;
  id: any;
  messegeexitos: any;
  constructor(private singerser: SingerService,private genderser: GenderService,private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    debugger;
    this.id =this.rutaActiva.snapshot.params.idSinger
    this.GetGender();
  }
  CreateUser(SingerName){

    if (SingerName === '' || SingerName === null || SingerName === undefined) {
      $('.error_username').html('Ingresa nombre del cantante');
      return false;
    }
    else {
      // this.singer = new Singer();
      // this.gendersong.idGender = SingerName,
      // this.gendersong.state = 1;

      // this.singerser.PostGenderSong(this.gendersong)
      // .subscribe((data: any) => {
      //   this.messegeexitos = 'El cantante fue dado de alta con el codigo de exito ' + data + '\n En breve se rediccionara a la pagina principal',
      //   this.LoadCreate(true);
      //   this.LoadDataObject();
      // },
      //   (err: HttpErrorResponse) => {
      //     debugger;
      //     if (err.error.ExceptionMessage === '400')
      //     {
      //       this.errorcreate = 'Ya existe un cantante con ese nombre';
      //     }
      //     else{
      //       this.errorcreate = 'No se puede crear el cantante';
      //     }
      //   });
    }
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
