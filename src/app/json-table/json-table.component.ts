import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_DATA } from './data'

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent {

  rows = new Array<any>();
  selectedColumns:string[]=['nasdaq-listed-json','data-json','nyse-listed-json','monthly-json','vix-daily-json']
  dataSource: any;
  displayedColumns :string[] = [];
  @ViewChild(MatSort) sort:any; MatSort:any;
  @ViewChild(MatPaginator) paginator:any;MatPaginator:any;

  displayedColumnsNames:string[] = [];
  
 
constructor(){
  this.yourFunction(PAGE_DATA)
} 
tableDrop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value; 
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
 yourFunction(input: any[]) {
    this.rows = input; 
    this.displayedColumns = this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.rows);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
