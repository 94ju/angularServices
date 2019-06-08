import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
 
  constructor(private service:LoggingService,private dataservice:DataService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.dataservice.addAccount(accountName,accountStatus);
    // this.service.logStatusChange(accountStatus);
  
  }
}
