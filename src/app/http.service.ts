import { Injectable } from '@angular/core';
import { HttpClient  ,HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public responseCache = new Map();

  constructor( private _http:HttpClient) {
      console.log("http contructore called")
   }

   baseurl = "https://vast-shore-74260.herokuapp.com"

   public getallData(name:String):Observable<any>{
    const dataFromCache = this.responseCache.get(this.baseurl+'/banks?city='+name)
    if(dataFromCache){
      return of(dataFromCache)
    }else{
    const response =  this._http.get(this.baseurl+'/banks?city='+name)
    return response;
    }
        
   } 
}
