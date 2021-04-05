import { PAGE_DATA } from './json-table/data';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  select_all = false;
  rows = new Array<any>();
  dataSource: any;
  displayedColumns :string[] = [];
  list: any;
  
  
  constructor() {
    this.yourFunction(PAGE_DATA)
    }
    yourFunction(input: any[]) {
      this.rows = input; // Update your model
      this.displayedColumns = this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
      console.log(this.displayedColumns);
      this.dataSource = new MatTableDataSource(this.rows);
    }
     
   ngOnInit(): void {
   }
  
}