import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
  private baseurl = "http://springdbex7-cloud-warriors.inmbzp8022.in.dst.ibm.com/details";




  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
  getAllDetails(): any {

    let myResponse = this._http.get(this.baseurl);
    return myResponse;
  }
}
