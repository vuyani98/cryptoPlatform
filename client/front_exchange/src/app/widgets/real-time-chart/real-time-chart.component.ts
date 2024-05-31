import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-real-time-chart',
  templateUrl: './real-time-chart.component.html',
  styleUrl: './real-time-chart.component.css'
})
export class RealTimeChartComponent implements OnInit{

  src = `https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js`;
  html = `
  {
    "autosize": true,
    "symbol": "BITSTAMP:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "allow_symbol_change": true,
    "calendar": false,
    "support_host": "https://www.tradingview.com"
  }
  `

  constructor( private element : ElementRef, private renderer: Renderer2){}

  ngOnInit(): void {
    this.loadScript(this.src, this.html)
  }

  loadScript(url : string, html: string){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
