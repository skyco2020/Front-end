import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Gender} from '../Classes/gender';
import { Router } from '@angular/router';
import {GenderService} from '../services/gender.service';

declare var $: any;

@Component({
  selector: 'app-addgender',
  templateUrl: './addgender.component.html',
  styleUrls: ['./addgender.component.css']
})
export class AddgenderComponent implements OnInit {
  usr = new Gender();
  errorcreate: any;
  singers: any;
  public load: boolean;
  messegeexitos: any;

  constructor(private singerser: GenderService, private router: Router) { }

  ngOnInit(): void {
    debugger;
    const filter = '?count=1';
    this.singerser.GetAll(filter).
      subscribe((data: any) => {
        debugger;
        if(data !== null){
          this.singers = data;
        }
      });
  }
  CreateUser(UserName){

    if (UserName === '' || UserName === null || UserName === undefined) {
      $('.error_username').html('Ingresa nombre del genero');
      return false;
    }
    else {
      // this.usr = new User();
      this.usr.creationDate = new Date();
      this.usr.finalDate = new Date();
      this.usr.name = UserName,
      // tslint:disable-next-line: radix
      this.usr.idUser = parseInt(localStorage.getItem('IdUser'));
      this.usr.state = 1;

      this.singerser.Post(this.usr)
      .subscribe((data: any) => {
        this.messegeexitos = 'El genero fue dado de alta con el codigo ' + data + '\n En breve se rediccionara a la pagina principal',
        this.LoadCreate(true);
        this.LoadDataObject();
      },
        (err: HttpErrorResponse) => {
          if(err.error.ExceptionMessage === '400')
          {
            this.errorcreate = 'Ya existe un genero con ese nombre"';
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
      this.router.navigate(['/listgender']);
    }, 5000);
   }
}
