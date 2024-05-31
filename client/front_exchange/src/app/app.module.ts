import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFabButton } from "@angular/material/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutesModule } from "./app-routes.module";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./layout/nav-bar/nav-bar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { RealTimeChartComponent } from "./widgets/real-time-chart/real-time-chart.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFabButton,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers:[ provideHttpClient()]
})

export class AppModule {}
