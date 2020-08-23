import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './../services/user.service';
import {Observable,Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  users : Observable<any>;
   userServiceSubscription : Subscription;
  constructor(private userService :UserService) { }

ngOnInit(){
  this.users=this.userService.getUsers();
}
ngOnDestroy(){
 // this.userServiceSubscription.unsubscribe();
}
}