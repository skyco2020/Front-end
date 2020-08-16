import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Singer} from '../Classes/singer';
import { Router } from '@angular/router';
import {SingerService} from '../services/singer.service';

declare var $: any;

@Component({
  selector: 'app-addsinger',
  templateUrl: './addsinger.component.html',
  styleUrls: ['./addsinger.component.css']
})
export class AddsingerComponent implements OnInit {
  singer = new Singer();
  errorcreate: any;
  singers: any;
  public load: boolean;
  messegeexitos: any;

  constructor(private singerser: SingerService, private router: Router) { }

  ngOnInit(): void {

  }
  CreateUser(SingerName){

    if (SingerName === '' || SingerName === null || SingerName === undefined) {
      $('.error_username').html('Ingresa nombre del cantante');
      return false;
    }
    else {
      // this.singer = new Singer();
      this.singer.Name = SingerName,
      this.singer.state = 1;

      this.singerser.Post(this.singer)
      .subscribe((data: any) => {
        this.messegeexitos = 'El cantante fue dado de alta con el codigo de exito ' + data + '\n En breve se rediccionara a la pagina principal',
        this.LoadCreate(true);
        this.LoadDataObject();
      },
        (err: HttpErrorResponse) => {
          debugger;
          if (err.error.ExceptionMessage === '400')
          {
            this.errorcreate = 'Ya existe un cantante con ese nombre';
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
      this.router.navigate(['/listsinger']);
    }, 5000);
   }
}
