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
  usr = new Singer();
  errorcreate: any;
  singers: any;
  public load: boolean;
  messegeexitos: any;

  constructor(private singerser: SingerService, private router: Router) { }

  ngOnInit(): void {

  }
  CreateUser(UserName, Password, confirm){

    if (UserName === '' || UserName === null || UserName === undefined) {
      $('.error_username').html('Ingresa nombre usuario');
      return false;
    } else if (Password === '' || Password === null || Password === undefined) {
      $('.error_password').html('Ingresa contraseña del usuario');
      return false;
    }
    else if (confirm === '' || confirm === null || confirm === undefined) {
      $('.error_confpassword').html('Confirmar contraseña del usuario');
      return false;
    }
    else if (confirm !==  Password) {
      $('.error_confpassword').html('Contraseña diferente');
      return false;
    }
    else {
      // this.usr = new User();
      // this.usr.creationDate = new Date();
      // this.usr.finalDate = new Date();
      // this.usr.userName = UserName,
      // this.usr.userPass = Password,
      // this.usr.state = 1;

      this.singerser.Post(this.usr)
      .subscribe((data: any) => {
        this.messegeexitos = 'El usuario fue dado de alta con el codigo de exito ' + data + '\n En breve se rediccionara a la pagina principal',
        this.LoadCreate(true);
        this.LoadDataObject();
      },
        (err: HttpErrorResponse) => {
          if(err.error.ExceptionMessage === 'Ya existe un usuario con ese nombre"')
          {
            this.errorcreate = 'Ya existe un usuario con ese nombre"';
          }
          else{
            this.errorcreate = 'No se puede crear el usuario';
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
      this.router.navigate(['/home']);
    }, 5000);
   }
}
