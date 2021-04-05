import { ServiceService } from './../service.service';
import { Component, ViewChild,OnInit,OnChanges} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Output, EventEmitter,Input } from'@angular/core';
import {MatPaginator} from '@angular/material/paginator';
  
@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements OnInit {
 
  public table: any=[];

  

  //public employeeData:any=[];

  displayedColumns: string[] = ['Week_High', 'Week_Low', 'Dividend_Yield', 'EBITDA','EarningsShare',
    'Market_Cap','Name','Price','PriceBook','PriceEarnings','PriceSales','SEC_Filings','Sector','Symbol'];
   @Input() selectedOption:any;
  dataSource = new MatTableDataSource(this.table);
  @ViewChild(MatPaginator) paginator:any; MatPaginator:any
  @ViewChild(MatSort) sort:any; MatSort:any;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; 
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  ngOnChanges(){
    
    if(this.selectedOption!=null && this.selectedOption.sector!=null  && (this.selectedOption.sector.EventAllType==true || (this.selectedOption.sector.EventAllType==false && this.selectedOption.sector.SelectedText==[]))){
      this.dataSource = new MatTableDataSource(this.table);
    }
    else if(this.selectedOption!=null && this.selectedOption.sector!=null  && this.selectedOption.sector.SelectedText!=[])
    {
        let sortedRecords=this.table.filter((da:any)=>this.selectedOption.sector.SelectedText.includes(da.Sector));
        this.dataSource=new MatTableDataSource(sortedRecords);
    }
  }
  getDisplayColumns():any
  {
    if(this.selectedOption!=null && this.selectedOption.field!=null  && (this.selectedOption.field.EventAllType==true || (this.selectedOption.field.EventAllType==false && this.selectedOption.field.SelectedText==[]))){
      return this.displayedColumns;
    }
    else if(this.selectedOption!=null && this.selectedOption.field!=null  && this.selectedOption.field.SelectedText!=[])
    {
      let sortedRecords=this.displayedColumns.filter(da=>this.selectedOption.field.SelectedText.includes(da));
      return sortedRecords;
    }
  }
   isDisplay(value:any):any{

   }
  constructor(private data:ServiceService) {
    this.getdetails();
   
  }
  
  ngAfterViewInit() {
   
  }
  getdetails(){
    this.data.getdata().subscribe(res=>{
      this.table=res;
      this.dataSource= new MatTableDataSource(this.table);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
   ngOnInit(){
    
   }
  

}
 

