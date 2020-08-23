import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import {Subscription, concat, EMPTY} from 'rxjs';
import { concatMap, map, mergeAll ,mergeMap, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit ,OnDestroy{
  user ;
  userId;
  userServiceSubscription : Subscription;
  constructor(private route : ActivatedRoute,private userService : UserService) {
    this.user={}
    this.user.album=[];
   }

  ngOnInit() {
  this.route.params.subscribe(x => this.userId=x.id);

  // this.userServiceSubscription=  this.userService.getUser(this.userId).pipe(
  //   map(x => this.user=x),
  //   concatMap( (user,index)=> this.userService.getUserAlbum(user.id) ),
  //   map((x2)=>{ this.user.album= x2;return this.user;}),
  //   concatMap((userAlbum:any)=> 
  //   { return this.userService.getUserImages(userAlbum.id) }),
  //   map((photos:any,index :number ) =>  
  //   {
  //     this.user.album.forEach(album =>{
  //      album.photos=  photos.filter(x => album.id === x.albumId)
  //     })

  //   return this.user;
  //   })
  // )
  
  // .subscribe(  )


  this.userServiceSubscription= this.userService.getUser(this.userId).pipe(switchMap(user => {
    this.user =user ;
    return this.userService.getUserAlbum(user.id);
  }),switchMap((album:any) =>  {
    this.user.album = album;
    return this.userService.getUserImages(album.id)
  }),switchMap((photo:any) =>{
   for (let albumIndex = 0; albumIndex < this.user.album.length ; albumIndex++)
   {
       this.user.album[albumIndex].photos=  photo.filter(photos => this.user.album[albumIndex].id === photos.albumId)
   }
    return photo;
  })).subscribe();

  }
  ngOnDestroy (){
    this.userServiceSubscription.unsubscribe();

  }

}