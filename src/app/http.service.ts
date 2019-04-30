import { Injectable } from '@angular/core';
import { HttpClient  ,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  configs: Observable<any>;


  constructor( private _http:HttpClient) {
      console.log("http contructore called")
   }

   baseurl = "https://vast-shore-74260.herokuapp.com"

   public getallData(name:String):Observable<any>{
   
    const response =  this._http.get(this.baseurl+'/banks?city='+name)
    return response;   
   }
 


   
}
