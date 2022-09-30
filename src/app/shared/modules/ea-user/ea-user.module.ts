import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaUserListComponent } from './ea-user-list/ea-user-list.component';
import { EaUserDetailComponent } from './ea-user-detail/ea-user-detail.component';

@NgModule({
  declarations: [EaUserListComponent, EaUserDetailComponent],
  imports: [CommonModule],
  exports: [EaUserListComponent, EaUserDetailComponent], 
})
export class EaUserModule {}
