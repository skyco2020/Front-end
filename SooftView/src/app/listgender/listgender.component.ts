import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Gender} from '../Classes/gender';
import { Router } from '@angular/router';
import {GenderService} from '../services/gender.service';

@Component({
  selector: 'app-listgender',
  templateUrl: './listgender.component.html',
  styleUrls: ['./listgender.component.css']
})
export class ListgenderComponent implements OnInit {

  constructor(private genderser: GenderService, private router: Router) { }
  usr = new Gender();
  errorcreate: any;
  singers: any;
  public load: boolean;
  messegeexitos: any;
  ngOnInit(): void {
    const filter = '?count=1';
    this.genderser.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.singers = data;
        }
      });
  }

}
