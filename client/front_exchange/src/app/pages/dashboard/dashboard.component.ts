import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  script = document.createElement("script");
  container  = this.element.nativeElement.querySelector('#container');

  constructor( private element : ElementRef){
  }

  ngOnInit(): void {

    this.script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    this.script.type = "text/javascript";
    this.script.async = true;
    this.script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
      this.container
  }

  tradingViewWidget(){}

}
