import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ea-user-list',
  templateUrl: './ea-user-list.component.html',
  styleUrls: ['./ea-user-list.component.css'],
})
export class EaUserListComponent implements OnInit {
  @Input()
  selectedUser: User | undefined;

  @Output()
  onSelectUser: EventEmitter<User> = new EventEmitter<User>();
  @Input()
  users: User[] = [];

  constructor(private userSevice: UserService) {}

  ngOnInit(): void {

  }

  onSelected(user: User) {
    this.selectedUser = user;
    this.onSelectUser.emit(user);
  }
}
