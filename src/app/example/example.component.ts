import { Component, OnInit,Output, ViewChild,EventEmitter } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
export interface PeriodicElement{
  field:string;
 

  }

const ELEMENT_DATA=[
  {"field":"Week_High",},{"field":"Week_Low"},{"field":"Dividend_Yield"},{"field":"EBITDA"},{"field":"EarningsShare"},{"field":"Market_Cap"},
  {"field":"Name"},{"field":"Price"},{"field":"PriceBook"},{"field":"PriceEarnings"},{"field":"PriceSales"},
  {"field":"Sector"},{"field":"Symbol"},
  
];
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'] 
})
export class ExampleComponent implements OnInit {
  checked:any;
  public show: boolean = false;



 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
    displayedColumns:string[]=['select','field']
    @Output() onunCheckedData=new EventEmitter<any>();
    uncheckedDataArray:any[]=[];
    
    
   
  constructor() { }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
        if(this.isAllSelected()){
          let obj={
            EventAllType:true,
            SelectedText:this.uncheckedDataArray
          }
          this.onunCheckedData.emit(obj);
        }
        else if(!this.isAllSelected()){
          this.uncheckedDataArray=[];
          let obj={
            EventAllType:false,
            SelectedText:this.uncheckedDataArray
          }
        }
  }


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'select' : 'deselect'} row ${row.field + 1}`;
  }
  
  optionChange(event:any, row:any)
  {
    
    if(event.checked==true)
    {
     let index= this.uncheckedDataArray.findIndex(ch=>ch==row.field);
     if(index=-1)
     this.uncheckedDataArray.push(row.field);
    }
    else if(event.checked==false)
    {
      let index= this.uncheckedDataArray.findIndex(ch=>ch==row.field);
      this.uncheckedDataArray.splice(index,1);
    }
    let obj={
      EventAllType:false,
      SelectedText:this.uncheckedDataArray
    }
    this.onunCheckedData.emit(obj);
  }
  ngOnInit(): void {
  
  }
}
