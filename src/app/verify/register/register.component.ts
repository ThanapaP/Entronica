import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    password: '',
    fullname: '',
    age: '',
    mobileno: '',
    email: '',
  };

  isSubmitted = false;
  isSuccess = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(registrationForm: NgForm) {
    this.isSubmitted = true;

    if (registrationForm.valid) {
      alert('Register Success');
      const body = {
        username: this.registerData.username,
        password: this.registerData.password,
        email: this.registerData.email,
        phone: this.registerData.mobileno,
        age: this.registerData.age,
      };
      this.isSuccess = true;

      this.userService.register(body).subscribe((data) => {
        this.router.navigate(['/user']); 
      });
    } else {
      alert('Register Failed');
      this.isSuccess = false;
    }
  }
}
