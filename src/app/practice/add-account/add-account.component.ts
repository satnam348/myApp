import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService  ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  ngOnInit() {
  }
createAccont(accountName: string, status: string) {
this.accountsService.addAccount(accountName, status);
}
}
