import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User } from '@todo-user/model';
import { addUserURI } from '@todo-user/helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    this.http.post(addUserURI, user).subscribe(res => {
      console.log(res, 'Res');
    });
  }
}
