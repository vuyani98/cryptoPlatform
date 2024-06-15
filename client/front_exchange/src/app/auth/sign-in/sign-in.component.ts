import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { catchError } from 'rxjs';
import { loginStatus } from '../../../environments/environment.prod';
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isLoggedin : boolean;
  loginError = false;
  errorMessage = '';
  falseOTP= false;
  showOTPform = false;
  otp: number;
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })
  otpForm = this.formBuilder.group({ otp : null });

  constructor( private formBuilder: FormBuilder, private auth: AuthService, private route: Router){
    this.isLoggedin = loginStatus.isLoggedIn;
    this.otp = 0;
  }

  onLogin(){

      this.auth.login(this.loginForm.value).subscribe((res) => {

        //if user exists and password is correct
        if(res.user){
          localStorage.setItem('user', res.user);
          this.otp = Math.floor(Math.random()* 100000);
          emailjs.init({publicKey: "lkJc_8qBJxeyqufB9"});
          emailjs.send("service_hh2kq6e","template_zqxv5zr", {
            otp: this.otp,
            receiver: res.user,
          }).then(data => {
            if (data.text == 'OK'){
              this.showOTPform = true;

            }
          }).catch(err => {
            console.log(err.text);
            this.errorMessage = err;
            this.loginError;
          });
        }

        else if(res.error){
          this.errorMessage = res.error;
          this.loginError = true;
        }

      })


  }

  //validate otp and navigate to dashboard
  onConfirm(){

    if(this.otp == this.otpForm.controls.otp.value){
      loginStatus.isLoggedIn = true;
      this.isLoggedin = true;
      localStorage.setItem('isLoggedin', `${this.isLoggedin}`)
      this.route.navigateByUrl('dashboard');

    }
    else{
      this.falseOTP = true;
    }

  }
}
