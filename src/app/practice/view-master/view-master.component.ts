import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-view-master',
  templateUrl: './view-master.component.html',
  styleUrls: ['./view-master.component.css']
})
export class ViewMasterComponent implements OnInit {
 accounts: {name: string, status: string}[] = [];
 constructor(private accountsService: AccountsService  ) { }


  ngOnInit() {
this.accounts = this.accountsService.accounts;
  }

}
