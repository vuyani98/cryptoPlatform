import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { loginStatus } from '../../../environments/environment.development';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';
import { AuthModule } from '../../auth/auth.module';
import { faArrowDown, faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TickerTapeComponent } from '../../widgets/ticker-tape/ticker-tape.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;
  faAngleLeft = faAngleLeft;
  farAngleRight = faAngleRight;

  showme = false;
  isLoggedIn: boolean;

  constructor(){
    this.isLoggedIn = loginStatus.isLoggedIn;
  }

  showForm(){
    this.showme = true;
  }

}
