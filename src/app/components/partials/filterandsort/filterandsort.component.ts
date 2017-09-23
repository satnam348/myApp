import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filterandsort',
  templateUrl: './filterandsort.component.html',
  styleUrls: ['./filterandsort.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FilterandsortComponent implements OnInit {
  filterMenuIsOpen = false;
  sortMenuIsOpen = false;
  constructor() { }

  ngOnInit() {
  }
  isMobileView() {
      return (window.screen.width < 767);
    }
    toggleFilterMenu() {
      this.filterMenuIsOpen = ! this.filterMenuIsOpen ;
    }
    toggleSortMenu() {
      this.sortMenuIsOpen= !this.sortMenuIsOpen;
    }
    ignoreClick($event)
    {
      $event.stopPropagation();
    }
}
