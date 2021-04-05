import { Component, OnInit,Output, ViewChild,EventEmitter, AfterViewInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement{
  Week_High:  number;
  Week_Low:  number;
  Dividend_Yield:  number;
  EBITDA:  number;
  EarningsShare:  number;
  Market_Cap:  number;
  Name:  string;
  Price:  number;
  PriceBook:  number;
  PriceEarnings:  number;
  PriceSales:  number;
  SEC_Filings:  string;
  Sector:  string;
  Symbol:  string;
  } 
  const ELEMENT_DATA = [
    {"Week_High": 175.49, "Week_Low": 259.77, "Dividend_Yield": 2.3328617, "EBITDA": 9048000000.0, "EarningsShare": 7.92, "Market_Cap": 138721055226.0, "Name": "3M Company", "Price": 222.89, "PriceBook": 11.34, "PriceEarnings": 24.31, "PriceSales": 4.3902707, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MMM", "Sector": "Industrials", "Symbol": "MMM"},
{"Week_High": 48.925, "Week_Low": 68.39, "Dividend_Yield": 1.1479592, "EBITDA": 601000000.0, "EarningsShare": 1.7, "Market_Cap": 10783419933.0, "Name": "A.O. Smith Corp", "Price": 60.24, "PriceBook": 6.35, "PriceEarnings": 27.76, "PriceSales": 3.5754826, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AOS", "Sector": "Industrials", "Symbol": "AOS"},
 {"Week_High": 42.28, "Week_Low": 64.6, "Dividend_Yield": 1.9089824, "EBITDA": 5744000000.0, "EarningsShare": 0.26, "Market_Cap": 102121042306.0, "Name": "Abbott Laboratories", "Price": 56.27, "PriceBook": 3.19, "PriceEarnings": 22.51, "PriceSales": 3.7404804, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABT", "Sector": "Health Care", "Symbol": "ABT"},
{"Week_High": 60.05, "Week_Low": 125.86, "Dividend_Yield": 2.4995599, "EBITDA": 10310000000.0, "EarningsShare": 3.29, "Market_Cap": 181386347059.0, "Name": "AbbVie Inc.", "Price": 108.48, "PriceBook": 26.14, "PriceEarnings": 19.41, "PriceSales": 6.291571, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABBV", "Sector": "Health Care", "Symbol": "ABBV"},
 {"Week_High": 114.82, "Week_Low": 162.6, "Dividend_Yield": 1.7144699, "EBITDA": 5643228000.0, "EarningsShare": 5.44, "Market_Cap": 98765855553.0, "Name": "Accenture plc", "Price": 150.51, "PriceBook": 10.62, "PriceEarnings": 25.47, "PriceSales": 2.604117, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ACN", "Sector": "Information Technology", "Symbol": "ACN"},
 {"Week_High": 38.93, "Week_Low": 74.945, "Dividend_Yield": 0.43190324, "EBITDA": 2704000000.0, "EarningsShare": 1.28, "Market_Cap": 52518668144.0, "Name": "Activision Blizzard", "Price": 65.83, "PriceBook": 5.16, "PriceEarnings": 31.8, "PriceSales": 10.59512, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ATVI", "Sector": "Information Technology", "Symbol": "ATVI"},
 {"Week_High": 142.0, "Week_Low": 225.36, "Dividend_Yield": 0.35118526, "EBITDA": 587800000.0, "EarningsShare": 7.43, "Market_Cap": 6242377704.0, "Name": "Acuity Brands Inc", "Price": 145.41, "PriceBook": 3.55, "PriceEarnings": 18.22, "PriceSales": 1.7953473, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AYI", "Sector": "Industrials", "Symbol": "AYI"},
{"Week_High": 114.451, "Week_Low": 204.45, "Dividend_Yield": 0.0, "EBITDA": 2538040000.0, "EarningsShare": 3.39, "Market_Cap": 94550214268.0, "Name": "Adobe Systems Inc", "Price": 185.16, "PriceBook": 11.06, "PriceEarnings": 52.31, "PriceSales": 13.092818, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ADBE", "Sector": "Information Technology", "Symbol": "ADBE"},
 {"Week_High": 78.81, "Week_Low": 169.55, "Dividend_Yield": 0.21832074, "EBITDA": 853941000.0, "EarningsShare": 6.19, "Market_Cap": 8123611867.0, "Name": "Advance Auto Parts", "Price": 109.63, "PriceBook": 2.51, "PriceEarnings": 19.54, "PriceSales": 1.1301061, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AAP", "Sector": "Consumer Discretionary", "Symbol": "AAP"},
 {"Week_High": 9.7, "Week_Low": 15.65, "Dividend_Yield": 0.0, "EBITDA": 339000000.0, "EarningsShare": 0.03, "Market_Cap": 11191663795.0, "Name": "Advanced Micro Devices Inc", "Price": 11.22, "PriceBook": 21.47, "PriceEarnings": 187.0, "PriceSales": 2.1091955, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMD", "Sector": "Information Technology", "Symbol": "AMD"},
 {"Week_High": 10.0, "Week_Low": 12.05, "Dividend_Yield": 4.961832, "EBITDA": 3001000000.0, "EarningsShare": -1.72, "Market_Cap": 6920851212.0, "Name": "AES Corp", "Price": 10.06, "PriceBook": 2.2, "PriceEarnings": 9.96, "PriceSales": 0.65951383, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AES", "Sector": "Utilities", "Symbol": "AES"},
{"Week_High": 119.51, "Week_Low": 194.4, "Dividend_Yield": 1.101989, "EBITDA": 4139000000.0, "EarningsShare": 5.75, "Market_Cap": 59197016353.0, "Name": "Aetna Inc", "Price": 178.0, "PriceBook": 3.79, "PriceEarnings": 18.11, "PriceSales": 0.9923546, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AET", "Sector": "Health Care", "Symbol": "AET"},
 {"Week_High": 148.81, "Week_Low": 216.995, "Dividend_Yield": 0.6387395, "EBITDA": 1261400000.0, "EarningsShare": 12.07, "Market_Cap": 10442174371.0, "Name": "Affiliated Managers Group Inc", "Price": 179.11, "PriceBook": 2.89, "PriceEarnings": 12.24, "PriceSales": 4.591235, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMG", "Sector": "Financials", "Symbol": "AMG"},
 {"Week_High": 68.8, "Week_Low": 91.73, "Dividend_Yield": 2.4299066, "EBITDA": 0.0, "EarningsShare": 11.01, "Market_Cap": 33422948000.0, "Name": "AFLAC Inc", "Price": 83.25, "PriceBook": 1.53, "PriceEarnings": 12.24, "PriceSales": 1.5429344, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AFL", "Sector": "Financials", "Symbol": "AFL"},
 {"Week_High": 49.23, "Week_Low": 75.0, "Dividend_Yield": 0.8756979, "EBITDA": 1094000000.0, "EarningsShare": 2.1, "Market_Cap": 21984606918.0, "Name": "Agilent Technologies Inc", "Price": 65.05, "PriceBook": 4.56, "PriceEarnings": 27.45, "PriceSales": 6.493563, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=A", "Sector": "Health Care", "Symbol": "A"},
 {"Week_High": 133.6301, "Week_Low": 175.17, "Dividend_Yield": 2.7811136, "EBITDA": 2542500000.0, "EarningsShare": 13.66, "Market_Cap": 34638387128.0, "Name": "Air Products & Chemicals Inc", "Price": 152.8, "PriceBook": 3.35, "PriceEarnings": 24.22, "PriceSales": 4.1163683, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=APD", "Sector": "Materials", "Symbol": "APD"},
 {"Week_High": 44.65, "Week_Low": 69.56, "Dividend_Yield": 0.0, "EBITDA": 789517000.0, "EarningsShare": 1.79, "Market_Cap": 10906904066.0, "Name": "Akamai Technologies Inc", "Price": 62.49, "PriceBook": 3.25, "PriceEarnings": 32.55, "PriceSales": 5.8546524, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AKAM", "Sector": "Information Technology", "Symbol": "AKAM"},
{"Week_High": 59.25, "Week_Low": 101.43, "Dividend_Yield": 1.9928383, "EBITDA": 1665000000.0, "EarningsShare": 8.28, "Market_Cap": 7903173734.0, "Name": "Alaska Air Group Inc", "Price": 64.04, "PriceBook": 2.21, "PriceEarnings": 9.66, "PriceSales": 0.9801092, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ALK", "Sector": "Industrials", "Symbol": "ALK"},
 {"Week_High": 90.35, "Week_Low": 144.99, "Dividend_Yield": 1.2004126, "EBITDA": 686030000.0, "EarningsShare": 5.66, "Market_Cap": 11782151266.0, "Name": "Albemarle Corp", "Price": 105.18, "PriceBook": 2.98, "PriceEarnings": 26.03, "PriceSales": 5.3666205, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ALB", "Sector": "Materials", "Symbol": "ALB"},
 {"Week_High": 106.89, "Week_Low": 134.37, "Dividend_Yield": 3.0262272, "EBITDA": 0.0, "EarningsShare": 1.57, "Market_Cap": 12043374429.0, "Name": "Alexandria Real Estate Equities Inc", "Price": 114.58, "PriceBook": 2.07, "PriceEarnings": 19.03, "PriceSales": 10.492155, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ARE", "Sector": "Real Estate", "Symbol": "ARE"},
{"Week_High": 96.18, "Week_Low": 149.34, "Dividend_Yield": 0.0, "EBITDA": 1072000000.0, "EarningsShare": 1.77, "Market_Cap": 26172439795.0, "Name": "Alexion Pharmaceuticals", "Price": 108.47, "PriceBook": 2.82, "PriceEarnings": 22.18, "PriceSales": 9.720562, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ALXN", "Sector": "Health Care", "Symbol": "ALXN"},
 

 {"Week_High": 51.12, "Week_Low": 66.1, "Dividend_Yield": 2.5546863, "EBITDA": 5170000000.0, "EarningsShare": 2.65, "Market_Cap": 102506501960.0, "Name": "Bristol-Myers Squibb", "Price": 62.69, "PriceBook": 6.75, "PriceEarnings": 20.83, "PriceSales": 6.503231, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BMY", "Sector": "Health Care", "Symbol": "BMY"},
{"Week_High": 42.265, "Week_Low": 61.315, "Dividend_Yield": 2.049254, "EBITDA": 5328000000.0, "EarningsShare": -0.65, "Market_Cap": 65482462410.0, "Name": "ConocoPhillips", "Price": 53.24, "PriceBook": 2.16, "PriceEarnings": 72.93, "PriceSales": 2.0764177, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=COP", "Sector": "Energy", "Symbol": "COP"},
{"Week_High": 40.22, "Week_Low": 48.615, "Dividend_Yield": 3.3213644, "EBITDA": 8589000000.0, "EarningsShare": 1.49, "Market_Cap": 189855335601.0, "Name": "Coca-Cola Company (The)", "Price": 43.1, "PriceBook": 8.65, "PriceEarnings": 22.8, "PriceSales": 6.822138, "SEC_Filings": "http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=KO", "Sector": "Consumer Staples", "Symbol": "KO"},


]

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  opened:any=false;
  public show: boolean = false;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
   displayedColumns:string[]=['select','Sector']
   @Output() onCheckedData=new EventEmitter<any>();
   checkedDataArray:any[]=[];
   @ViewChild('t2Sort') t2Sort:any ;MatSort:any;
  // @ViewChild(MatSort) inventoryDataSort:any; MatSort:any;
  
//  filter

  constructor() { }
  ngAfterViewInit() {
    this.dataSource.sort = this.t2Sort;

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
  
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

      if(this.isAllSelected()){
        let obj={
          EventAllType:true,
          SelectedText:this.checkedDataArray
        }
        this.onCheckedData.emit(obj);
      }
      else if(!this.isAllSelected()){
        this.checkedDataArray=[];
        let obj={
          EventAllType:false,
          SelectedText:this.checkedDataArray
        }
        this.onCheckedData.emit(obj);
      }  
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Sector + 1}`;
  }
  optionChange(event:any, row:any)
  {
    
    if(event.checked==true)
    {
     let index= this.checkedDataArray.findIndex(ch=>ch==row.Sector);
     if(index=-1)
     this.checkedDataArray.push(row.Sector);
    }
    else if(event.checked==false)
    {
      let index= this.checkedDataArray.findIndex(ch=>ch==row.Sector);
      this.checkedDataArray.splice(index,1);
    }
    let obj={
      EventAllType:false,
      SelectedText:this.checkedDataArray
    }
    this.onCheckedData.emit(obj);
  }
 
}



