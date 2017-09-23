import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
   encapsulation : ViewEncapsulation.None,
  styleUrls: ['./view-account.component.css'],

})
export class ViewAccountComponent implements OnInit {
 @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private accountsService: AccountsService  ) { }

  ngOnInit() {
  }
onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  this.accountsService.statusUpdated.emit(status);
  }
}
