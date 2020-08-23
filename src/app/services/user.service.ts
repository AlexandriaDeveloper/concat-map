import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(id:number):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
  getUserAlbum(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums',{params: {'userId' :userId}})
  }
  getUserImages(alboumId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos',{params: {'userId' :alboumId}});
  }

}