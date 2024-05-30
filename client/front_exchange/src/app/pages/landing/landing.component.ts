import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { loginStatus } from '../../../environments/environments';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';
import { AuthModule } from '../../auth/auth.module';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  showme = false;
  isLoggedIn: boolean;

  constructor(){
    this.isLoggedIn = loginStatus.isLoggedIn;
  }

  showForm(){
    this.showme = true;
  }

}
