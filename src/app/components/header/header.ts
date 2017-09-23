import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AccountsService } from '../../practice/accounts.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component ({
  selector: 'header-component',
  templateUrl: './header.html'

})
export class HeaderComponent  {
  toggle: boolean = false;
  public navIsFixed: boolean = false;
  constructor(router: Router, @Inject(DOCUMENT) private document: Document, private accountsService: AccountsService) {
    router.events.forEach((event) => {
    if ( event instanceof NavigationEnd ) {
      this.toggle = false;
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });
   this.accountsService.statusUpdated.subscribe(
     // (status: string) => alert('New Status: ' + status)
    );
  }



@HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}
