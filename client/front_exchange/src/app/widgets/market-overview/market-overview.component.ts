import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrl: './market-overview.component.css'
})
export class MarketOverviewComponent implements OnInit {

  src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
  html = `
    {
  "symbols": [
    [
      "BITSTAMP:BTCUSD|1M"
    ],
    [
      "COINBASE:ETHUSD|1M"
    ],
    [
      "COINBASE:SOLUSD|1M"
    ],
    [
      "BITSTAMP:XRPUSD|1M"
    ],
    [
      "COINBASE:LINKUSD|1M"
    ],
    [
      "COINBASE:SHIBUSD|1M"
    ],
    [
      "BINANCE:ADAUSD|1M"
    ],
    [
      "COINBASE:BONKUSD|1M"
    ],
    [
      "BINANCE:AVAXUSD|1M"
    ]
  ],
  "chartOnly": false,
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "colorTheme": "dark",
  "autosize": true,
  "showVolume": false,
  "showMA": false,
  "hideDateRanges": false,
  "hideMarketStatus": false,
  "hideSymbolLogo": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  "fontSize": "10",
  "noTimeScale": false,
  "valuesTracking": "1",
  "changeMode": "price-and-percent",
  "chartType": "area",
  "maLineColor": "#2962FF",
  "maLineWidth": 1,
  "maLength": 9,
  "backgroundColor": "rgba(49, 27, 146, 1)",
  "lineWidth": 2,
  "lineType": 0,
  "dateRanges": [
    "1d|1",
    "1m|30",
    "3m|60",
    "12m|1D",
    "60m|1W",
    "all|1M"
  ]
}
  `;
  constructor(private element : ElementRef, private renderer: Renderer2){

  }

  ngOnInit(): void {
    this.loadScript(this.src, this.html)
  }

  loadScript(url : string, html: string){
    const div = <HTMLDivElement> document.getElementById('market-overview')
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = true;
    script.defer = true;
    div.appendChild(script);
  }
}
