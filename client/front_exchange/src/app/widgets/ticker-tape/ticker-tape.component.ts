import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ticker-tape',
  templateUrl: './ticker-tape.component.html',
  styleUrl: './ticker-tape.component.css'
})
export class TickerTapeComponent implements OnInit {

  src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  html = `
    {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500 Index"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100 Cash CFD"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
      "description": "Solana",
      "proName": "COINBASE:SOLUSD"
    },
    {
      "description": "XRP",
      "proName": "BITSTAMP:XRPUSD"
    },
    {
      "description": "Gold Futures",
      "proName": "COMEX:GC1!"
    }
  ],
  "showSymbolLogo": true,
  "isTransparent": true,
  "displayMode": "adaptive",
  "colorTheme": "dark",
  "locale": "en"
}
  `

  constructor(private element : ElementRef, private renderer: Renderer2){

  }

  ngOnInit(): void {
      this.loadScript(this.src, this.html)
  }

  loadScript(url : string, html: string){
    const div = <HTMLDivElement> document.getElementById('ticker')
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = true;
    script.defer = true;
    div.appendChild(script);
  }

}
