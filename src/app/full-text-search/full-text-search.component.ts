import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchProductsService } from '../fetch-products.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-full-text-search',
  templateUrl: './full-text-search.component.html',
  styleUrls: ['./full-text-search.component.css']
})
export class FullTextSearchComponent implements OnInit {

  
  public productList;
  constructor(private location: Location,private _route: ActivatedRoute,private router: Router,private productservice: FetchProductsService) { }

  ngOnInit() {
    let searchTerm = this._route.snapshot.paramMap.get('searchitem');

    this.productservice.getSearchDetails(searchTerm).subscribe(
      data => {
        console.log(data);
        this.productList = data.plannedEvents;

  
},
error => {
  console.log("some error occured");
  console.log(error.errorMessage);
});

}
goBackToPreviousPage(){
  this.location.back();

}


}
