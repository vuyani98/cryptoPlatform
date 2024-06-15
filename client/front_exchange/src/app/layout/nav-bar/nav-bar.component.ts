import { Component } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { loginStatus } from '../../../environments/environment.development';
import { trigger, state, style, animate, transition, keyframes, query, stagger, group } from '@angular/animations';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  animations: [

                trigger('cross', [

                  transition('straight => crossed', [

                    group([
                      query('#center-line', [

                        animate('400ms ease-out', keyframes([
                          style({ opacity : 1, offset: 0}),
                          style({ opacity : 0, offset: 1}),
                        ]))

                      ], { optional : true }),

                      query('#top-line', [
                        animate('400ms ease-out', keyframes([
                          style({ transform: 'translateY(0px)', offset: 0}),
                          style({ transform: 'translateY(7px)', offset: 0.5}),
                          style({ transform: 'translate(0px, 7px) rotate(-45deg)', offset: 1})
                        ]))
                      ], { optional : true }),

                      query('#bottom-line', [
                        animate('400ms ease-out', keyframes([
                          style({ transform: 'translateY(0px)', offset: 0}),
                          style({ transform: 'translateY(-7px)', offset: 0.5}),
                          style({ transform: 'translate(0px, -7px) rotate(45deg)', offset: 1})
                        ]))
                      ], { optional : true }),

                      query('.menu-items', [
                        style({ opacity : 0}),
                        animate('400ms ease-out', keyframes([
                          style({ transform : 'translateY(-15px)', opacity : 0, offset: 0 }),
                          style({ transform : 'translateY(-7px)', opacity : 0.5, offset: 0.5 }),
                          style({ transform : 'translateY(0px)', opacity : 1 , offset: 1 }),
                        ])),
                      ], ({ optional : true })),
                    ])

                  ]),

                  transition('crossed => straight', [

                    group([
                      query('#center-line', [
                        animate('400ms ease-out', keyframes([
                          style({ opacity : 0, offset: 0}),
                          style({ opacity : 1, offset: 1}),
                        ]))
                      ], { optional : true }),

                      query('#top-line', [
                        animate('400ms ease-out', keyframes([
                          style({ transform: 'translateY(7px)', offset: 0}),
                          style({ transform: 'rotate(0deg)', offset: 0.5}),
                          style({ transform: 'translate(0px, 0px) rotate(0deg)', offset: 1})
                        ]))
                      ], { optional : true }),

                      query('#bottom-line', [
                        animate('400ms ease-out', keyframes([
                          style({ transform: 'translateY(-7px)', offset: 0}),
                          style({ transform: 'rotate(0deg)', offset: 0.5}),
                          style({ transform: 'translate(0px, 0px) rotate(0deg)', offset: 1})
                        ]))
                      ], { optional : true }),
                    ])

                  ]),

                ])
  ]
})
export class NavBarComponent {
   faUser = faUser;
   isLoggedIn: boolean;
   top_line_style = "translate(0px, 0px) rotate(0deg)";
   center_line_style = 1;
   bottom_line_style = "translate(0px, 0px) rotate(0deg)";
   isMobileOpen = false;
   menu_display = "none";

constructor(){
  this.isLoggedIn = loginStatus.isLoggedIn
}

  show_popup(name: string){

     if (name == "menu"){

      if (this.menu_display == "block"){
        this.menu_display = "none"
        this.isMobileOpen = false;
        this.top_line_style = "translate(0px, 0px) rotate(0deg)";
        this.center_line_style = 1;
        this.bottom_line_style = "translate(0px, 0px) rotate(0deg)";
      }

      else{
        this.menu_display = "block";
        this.isMobileOpen = true;
        this.top_line_style = "translate(0px, 7px) rotate(-45deg)";
        this.center_line_style = 0;
        this.bottom_line_style = "translate(0px, -7px) rotate(45deg)";
      }

    }

  }
}
