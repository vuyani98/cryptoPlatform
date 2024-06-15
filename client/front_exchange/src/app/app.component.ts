import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet, Router } from '@angular/router';
import { loginStatus } from '../environments/environments.development';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'front_exchange';
  isloggedIn: boolean;

  constructor(private route: Router){
    this.isloggedIn = loginStatus.isLoggedIn;

    /*if (!this.isloggedIn){
      this.route.navigateByUrl('/auth/signup');
    } */
  }

  ngOnInit(): void {
  }
}
