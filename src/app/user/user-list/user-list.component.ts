import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | undefined;


  constructor(private userSevice: UserService) {}

  ngOnInit(): void {
    // this.users = this.userSevice.getAllUser();
  }

  onSelected(user: User) {
    this.selectedUser = user;
  }
}
