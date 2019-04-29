import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../http.service';
import { startWith , map } from 'rxjs/operators'
const CACHE_KEY  = 'HttpRepoCache'

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  selectedCity: string = 'MUMBAI';
  all: any;
  status : any = "5";
  status_values: any = ["5", "10", "15","20","25","30"];
  selectedPage: any = 5;
   


  constructor(private service:HttpService) {
    
   }

  ngOnInit() {
     this.getAllinfo()
  }

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    this.selectedCity = event.target.value;
    this.getAllinfo()
  }
  
  pageChangeHandler (event: any) {
    this.selectedPage = event.target.value;
  } 
 


  public getAllinfo = ()=>{
   this.service.getallData(this.selectedCity).subscribe(
      data=>{
        this.all = data;
        console.log(this.all)
        localStorage[CACHE_KEY] = JSON.stringify(data)
        startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))

      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessege)
      }
    )   
  
  }
 
  
}
