import { Component, VERSION, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  constructor(private userService :UserService){}
ngOnInit(){

}
}
