import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { MatButton, MatButtonModule } from '@angular/material/button';

import { PagesRoutesModule } from './pages-routes.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { AuthModule } from '../auth/auth.module';
import { RealTimeChartComponent } from '../widgets/real-time-chart/real-time-chart.component';
import { TickerTapeComponent } from '../widgets/ticker-tape/ticker-tape.component';
import { StockMarketComponent } from '../widgets/stock-market/stock-market.component';
import { MarketOverviewComponent } from '../widgets/market-overview/market-overview.component';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    RealTimeChartComponent,
    TickerTapeComponent,
    StockMarketComponent,
    MarketOverviewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule,
    MatButtonModule,
    FontAwesomeModule,
    AuthModule
  ]
})
export class PagesModule { }
