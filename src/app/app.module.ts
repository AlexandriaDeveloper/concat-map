import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
const routes :Routes= [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component: UserDetailsComponent}]
@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, UserDetailsComponent, UsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
