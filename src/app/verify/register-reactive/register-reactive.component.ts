import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css'],
})
export class RegisterReactiveComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      mobileno: [
        '',
        [
          Validators.pattern('^(0)[6-9]{1}[0-9]{8}|^(999)d{7}'),
          Validators.required,
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
    });
  }
  isSubmitted = false;
  isSuccess = false;

  ngOnInit(): void {}

  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.registrationForm);

    if (this.registrationForm.valid) {
      alert('Register Success');
      this.isSuccess = true;
    } else {
      alert('Register Failed');
      this.isSuccess = false;
    }
  }
}
