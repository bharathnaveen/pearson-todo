import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '@todo-user/component/user/user.component';
import { UserFormComponent } from '@todo-user/component/user-form/user-form.component';
import { UserListComponent } from '@todo-user/component/user-list/user-list.component';


const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    { path: '', component: UserListComponent },
    { path: 'userform', component: UserFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
