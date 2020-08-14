import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLoginError = false;
  constructor(private usrser: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  OnSubmit(userName, password){
    if (userName === '')
    {
      $('.error_mail').html('Enter your email');
      return false;
    }
    else if (password === '')
    {
      $('.error_password').html('Enter your password');
      return false;
    }
    else{
      const filter = '?username=' + userName + '&userpass=' + password;

      this.usrser.Authentication(filter).subscribe((data: any) => {
          if (data !== null){
          localStorage.setItem('IdUser', data.idUser);
          this.router.navigate(['/home']);
          }
          // tslint:disable-next-line: align
          else {
            $('.error_password').html('Usuario y/o contreseña incorrecto');
            this.isLoginError = true;
          }
      },
    (err: HttpErrorResponse) => {
        $('.error_password').html('Error de Conexion');
        this.isLoginError = true;
    });
 }
}
 // tslint:disable-next-line: typedef
// tslint:disable-next-line: align
// tslint:disable-next-line: typedef
HideMessage(msg) {
  $('.' + msg).html('');
}
}
