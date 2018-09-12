import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User, DefaultUserObj, Credentials, LoginSuccess } from '@todo-core/models';
import { loginURI } from '@todo-core/helpers';

@Injectable()
export class AuthService {

  private user = new BehaviorSubject<User>(DefaultUserObj);
  user$ = this.user.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  isLoggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn$.subscribe(sub => this.isLoggedIn = sub);
  }

  login(credentials: Credentials) {
    this.http.post<LoginSuccess>(loginURI, credentials).subscribe(res => {
    if (res.success === true) {
      this.isLoggedInSubject.next(true);
      this.router.navigate(['/user']);
    }
      
    });
  }

}
