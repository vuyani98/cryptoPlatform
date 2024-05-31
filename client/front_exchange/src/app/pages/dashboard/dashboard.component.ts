import { Component, ElementRef, Renderer2, OnInit, AfterViewInit, HostListener, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { faPiggyBank, faWallet} from '@fortawesome/free-solid-svg-icons';
import { RealTimeChartComponent } from '../../widgets/real-time-chart/real-time-chart.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  faPiggyBank = faPiggyBank;
  faWallet = faWallet;
  private bodyClickListener?: () => void;

  src = `https://s3.tradingview.com/external-embedding/embed-widget-screener.js`;
  html = `{
      "width": "100%",
      "height": 550,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": "en"
    }`


  constructor( private element : ElementRef, private renderer: Renderer2, private cdref: ChangeDetectorRef){
  }

  ngOnInit(): void {


   this.loadScript(this.src, this.html)
  }


  ngAfterViewInit(): void {
  }

  loadScript(url : string, html: string){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    console.log('Dashboard')
    let symbolinks = document.getElementsByClassName('tvscreener__symbol');
    console.log(symbolinks)

    this.bodyClickListener = this.renderer.listen(
      body,
      'click',
      (event) => {
          event.preventDefault();
          console.log(event);
      }
    );

    /*for (let i=0; i< symbolinks.length; i++){
      this.bodyClickListener = this.renderer.listen(
        symbolinks[i],
        'click',
        (event) => {
            event.preventDefault();
            console.log(event);
        }
      );
    }*/

  }



  ngOnDestroy() {
    if (this.bodyClickListener) {
        this.bodyClickListener();
    }
}
}
