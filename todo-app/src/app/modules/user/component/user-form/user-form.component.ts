import { Component, OnInit } from '@angular/core';
import { UserService } from '@todo-user/service/user.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private US: UserService) { }

  ngOnInit() {
  }

  addUsers(form: NgForm) {
    const reqUser = {
      name : form.value.name,
      email: form.value.email,
      userStatus: form.value.userStatus
    }
    this.US.addUser(reqUser);
  }

}
