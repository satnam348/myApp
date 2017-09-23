import { Component, OnInit, Input , ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';
import { getBrowseService } from '../../../core/services/browseService';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  providers: [getBrowseService],
  encapsulation: ViewEncapsulation.None,
   styleUrls: ['./browse.scss'],

})
export class BrowseComponent implements OnInit {
  browseService: any;

  currentUrl: string;
  // displayMessage:string='Devices are Loaded.Please wait...';
  // display:boolean=true;
  constructor(public getBrowseService: getBrowseService, private route: ActivatedRoute) {
    //  this.displayMessage='Devices are Loaded.Please wait...';
    this.currentUrl = this.route.snapshot.url.join('/');

    this.getBrowseService.getBrowseData(this.currentUrl)
      .subscribe(
      data => {
        // this.display=false;
        this.browseService = data.json();

        console.log(this.browseService);
      },
      error => console.log(error)
      );

  }
  ngOnInit() {

  }

}

