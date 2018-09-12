import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@todo-core/services';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  userName: string;
  pass: string;

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  login() {
   this.auth.login({userName: this.userName, pass: this.pass});
  }

}
