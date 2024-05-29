import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { MatButton, MatButtonModule } from '@angular/material/button';

import { PagesRoutesModule } from './pages-routes.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule,
    MatButtonModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
