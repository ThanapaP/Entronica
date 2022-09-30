import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allUser: User[] = [];
  selectedUser: User | undefined;
  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.allUser = this.userService.getAllUser();
  // }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {
      this.allUser = data.resultDescription
      console.log(data.resultDescription);
     
    });
  }

  onSelected(user: User) {
    this.selectedUser = user;
  }
}
