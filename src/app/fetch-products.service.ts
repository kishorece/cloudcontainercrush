import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
  private baseurl = "https://springdbex7-cloud-warriors.inmbzp8022.in.dst.ibm.com/";




  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
  getAllDetails(): any {

    let myResponse = this._http.get(this.baseurl+"details");
    return myResponse;
  }
  getClassDetails(className): any {
    console.log(className);
    let myResponse = this._http.get(this.baseurl+ 'product/' + className);
    console.log(this.baseurl+ 'product/' + className);
    return myResponse;
  }
  getProductDetails(productDetails): any {
    console.log(productDetails);
    let myResponse = this._http.get(this.baseurl+productDetails);
    console.log(this.baseurl+productDetails);
    return myResponse;
  }

  getWatsonSearch(file): any {
    console.log("printing inside method");
    console.log(file);
    var formdata = new FormData();
    formdata.append("file", file); 
    let myResponse = this._http.post("http://cc-flask3-cloud-warriors.inmbzp8022.in.dst.ibm.com/watson_search",formdata);
    console.log(myResponse);
    return myResponse;
  }

  getSearchDetails(searchDetails): any {
    console.log(searchDetails);
    let myResponse = this._http.get("http://cc-flask3-cloud-warriors.inmbzp8022.in.dst.ibm.com/prod_search?searchwords="+searchDetails);
    //console.log("http://35.208.159.10:5000/prod_search?searchwords="+searchDetails);
    return myResponse;
  }
  
 
  getSingleProductDetails(product): any {
    
    console.log("getsingleproduct called");
    let myResponse = this._http.get("http://springdbex7-cloud-warriors.inmbzp8022.in.dst.ibm.com/item/" + product);
    console.log(myResponse);
    return myResponse;
  }


}
