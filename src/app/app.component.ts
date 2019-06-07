import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent implements OnInit {
  accounts:{name:string,status:string}[]=[];
  constructor(private data:DataService){};

  ngOnInit(){
    this.accounts=this.data.accounts
  }
}
