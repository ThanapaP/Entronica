import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  http: any;
  //class ของ Angular ไม่ต้อง New, implements เรียกใช้ properties/method 'OnInit'

  constructor(private router: Router, private userService: UserService) {}

  // username: string | undefined;
  username: string = '';
  password: string = '';

  ngOnInit(): void {}

  onLogin(): void {
    // alert('Login Success');
    // console.log(this.username);
    // console.log(this.password);

    this.userService.login(this.username, this.password).subscribe((data) => {
      console.log(data.resultDescription);
      if (data.resultCode === 20000) {
        alert('Login Success');
        this.router.navigate(['/user']);
      } else {
        alert('Login')
      }
    });

    // this.userService.login(this.username, this.password).subscribe({
    //   next: (data) => {
    //     console.log('data from api', data);
    //   },
    //   error: (error) => {
    //     console.log('error from api', error);
    //   },
    // });

    // this.router.navigate(['/user/user-list']);
    // this.userService.login().subscribe(() => {
    //   console.log();

    // })
  }
}
