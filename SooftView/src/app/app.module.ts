import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { AdduserComponent } from './adduser/adduser.component';
import { AddsingerComponent } from './addsinger/addsinger.component';
import { AddgenderComponent } from './addgender/addgender.component';
import { AddsongComponent } from './addsong/addsong.component';
import { AboutComponent } from './about/about.component';
import { ListsingerComponent } from './listsinger/listsinger.component';
import { ListsongComponent } from './listsong/listsong.component';
import { ListgenderComponent } from './listgender/listgender.component';
import { DetailsingerComponent } from './detailsinger/detailsinger.component';
import { AddgendersongComponent } from './addgendersong/addgendersong.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdduserComponent,
    AddsingerComponent,
    AddgenderComponent,
    AddsongComponent,
    AboutComponent,
    ListsingerComponent,
    ListsongComponent,
    ListgenderComponent,
    DetailsingerComponent,
    AddgendersongComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
    ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
