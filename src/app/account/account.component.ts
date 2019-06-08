import { Component, Input} from '@angular/core';
import { LoggingService} from '../logging.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private service:LoggingService,private dataservice:DataService){}
  onSetTo(status: string) { 
    this.dataservice.updatestatus(this.id,status);
    // this.service.logStatusChange(status);
  }
  
}
