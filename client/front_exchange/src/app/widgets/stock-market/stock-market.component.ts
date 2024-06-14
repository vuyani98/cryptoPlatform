import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrl: './stock-market.component.css'
})
export class StockMarketComponent implements OnInit{

  src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
  html = `
  {
    "colorTheme": "dark",
    "dateRange": "12M",
    "exchange": "US",
    "showChart": true,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": true,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "400",
    "height": "550",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "scaleFontColor": "rgba(209, 212, 220, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
  }
  `


  constructor(private element : ElementRef, private renderer: Renderer2){

  }

  ngOnInit(): void {
    this.loadScript(this.src, this.html)
  }

  loadScript(url : string, html: string){
    const div = <HTMLDivElement> document.getElementById('stock-market')
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = true;
    script.defer = true;
    div.appendChild(script);
  }

}
