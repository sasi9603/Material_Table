
import { Component, OnInit, ViewChild } from '@angular/core';
 import filename1 from '../../assets/jsonfiles/filename1.json';
 




@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {
   selectColumns: string[]=['select','filename1','filename2'] 

   filenames:any=[];
constructor(){
console.log(filename1);

}
ngonInit(){
  this.filenames=filename1;
  
}



} 
  

