import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyRoutingModule } from './verify-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RegisterReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    VerifyRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class VerifyModule {}
