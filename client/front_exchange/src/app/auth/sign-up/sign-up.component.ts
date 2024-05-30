import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from '../regex';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  registrationError = false;
  errorMessage = '';

  signupForm = this.formBuilder.group({

    email: '',
    username: '',
    password: '',
    confirmPass: ''

  })

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: Router){}

  ngOnInit(): void {

    this.signupForm.controls['email'].setValidators([ Validators.min(3), Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]);
    this.signupForm.controls['password'].setValidators([ Validators.required, Validators.pattern(StrongPasswordRegx)]);
    this.signupForm.controls['confirmPass'].setValidators([ Validators.required, Validators.pattern(StrongPasswordRegx)]);

  }

  //Attempt registrations
  onRegister(){

    this.auth.register(this.signupForm.value).subscribe((res) => {

      if(res.error){
        this.errorMessage = res.error;
        this.registrationError = true;
      }

      else if(res.user){
        this.route.navigateByUrl('/login')
      }
    })

  } //end onRegister()

}
