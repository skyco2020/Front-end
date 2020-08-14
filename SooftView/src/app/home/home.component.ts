import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskService} from '../services/task.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private userService: TaskService, private router: Router) { }

  ngOnInit() {
    const filter = '?count=1';
    this.userService.GetAll(filter).
      subscribe((data: any) => {
        if(data !== null){
          this.user = data;
        }
      });
  }
  Logout() {
    this.router.navigate(['/login']);
  }

}
