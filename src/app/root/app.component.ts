import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header';
import {footerComponent} from '../components/footer/footer';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'app';


    constructor( public router: Router) {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });


     }

}
