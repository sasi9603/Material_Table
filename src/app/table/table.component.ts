import { Component, OnInit,ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';
import { ServiceService } from "../service.service";
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table:any=[];
  displayedColumns = ['Week_High', 'Week_Low', 'Dividend_Yield', 'EBITDA','EarningsShare','Market_Cap','Name','Price','PriceBook','PriceEarnings','PriceSales','SEC_Filings','Sector','Symbol'];

  dataSource = new MatTableDataSource(this.table);
  @ViewChild(MatSort) sort:any; MatSort:any;
  @ViewChild(MatPaginator) paginator:any; MatPaginator:any;
 

columns:any[]=[
  {name:'Week_High',title:'Week_High'},
  {name:'Week_Low',title:'Week_Low'},
  {name:'Dividend_Yield',title:'Dividend_Yield'},
  {name:'EBITDA',title:'EBITDA'},
  {name:'EarningsShare',title:'EarningsShare'},
  {name:'Market_Cap',title:'Market_Cap'},
  {name:'Name',title:'Name'},
  {name:'Price',title:'Price'},
  {name:'PriceBook',title:'PriceBook'},
  {name:'PriceEarnings',title:'PriceEarnings'},
  {name:'PriceSales',title:'PriceSales'},
  {name:'SEC_Filings',title:'SEC_Filings'},
  {name:'Sector',title:'Sector'},
  {name:'Symbol',title:'Symbol'}
];
constructor(private data:ServiceService){
  this.getdetails();
}
getdetails(){
  this.data.getdata().subscribe(res=>{
    this.table=res;
    this.dataSource= new MatTableDataSource(this.table);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })
}
tableDrop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
}
 
  ngOnInit() {
    

  }
} 
  
