import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutesModule } from './auth-routes.module';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
