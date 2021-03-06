import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';
import { AddsingerComponent } from './addsinger/addsinger.component';
import { AddgenderComponent } from './addgender/addgender.component';
import { AddsongComponent } from './addsong/addsong.component';
import { AboutComponent } from './about/about.component';
import { ListsingerComponent } from './listsinger/listsinger.component';
import { ListsongComponent } from './listsong/listsong.component';
import { ListgenderComponent } from './listgender/listgender.component';
import { AddgendersongComponent } from './addgendersong/addgendersong.component';
import { DetailsingerComponent } from './detailsinger/detailsinger.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
      path: 'home', component: HomeComponent,
    },
    {
        path: 'login', component: UserComponent,
    },
    {
      path : 'adduser', component: AdduserComponent,
    },
    {
        path: 'listsinger', component: ListsingerComponent,
    },
    {
      path: 'listgender', component: ListgenderComponent,
    },
    {
        path: 'addgender', component: AddgenderComponent,
    },
    {
        path: 'addsinger', component: AddsingerComponent,
    },
    {
        path: 'addsong', component: AddsongComponent,
    },
    {
        path: 'listsong', component: ListsongComponent,
    },
    {
        path: 'about', component: AboutComponent,
    },
    {
        path: 'addgendersong/:idSinger', component: AddgendersongComponent,
    },
    {
        path: 'detailsinger/:idSinger', component: DetailsingerComponent,
    },
    {
      path : '', redirectTo: '/login', pathMatch : 'full'
    }
  ];
