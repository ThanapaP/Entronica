import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { EaUserModule } from '../shared/modules/ea-user/ea-user.module';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule, EaUserModule],
  exports: [UserListComponent],
})
export class UserModule {}
