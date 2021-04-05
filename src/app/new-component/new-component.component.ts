import { Component, OnInit } from '@angular/core';

import employees from "../../assets/employees.json";


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent  {
employeeData:any;
 

ngOnInit(){
  

    this.employeeData = employees;
   
} 
}
