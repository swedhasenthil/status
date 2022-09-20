import { Component } from '@angular/core';
import DataJson from './data.json';
import 'datatables.net-dt'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  dtOptions: DataTables.Settings = {};
  datas: any;

  constructor() {
    this.datas = DataJson.data
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full',
      pageLength: 10,
      processing: true,
       paging: true,
    };
  
  }

 
}
