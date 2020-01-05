import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FetchProductsService } from '../fetch-products.service';
import { Location } from '@angular/common';
import * as _ from "lodash";
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public individualProduct;
  

  constructor(private location: Location,private _route: ActivatedRoute,private router: Router,private productservice: FetchProductsService){ }
public uniqueBrand = [];
public uniqueColor = [];
public uniqueSize = [];
public uniquePrice  = [];
  ngOnInit() {
    
    let className = this._route.snapshot.paramMap.get('className');
    


    console.log(className);
    this.productservice.getProductDetails(className).subscribe(

      data => {
        console.log(data);
        this.individualProduct = data.plannedEvents;
        this.uniqueBrand = _.uniqBy(this.individualProduct,function (individualProduct) {
  return individualProduct.brand;
});
this.uniqueColor = _.uniqBy(this.individualProduct,function (individualProduct) {
  return individualProduct.skuattValue2;
});
this.uniqueSize = _.uniqBy(this.individualProduct,function (individualProduct) {
  return individualProduct.skuattValue1;
});
this.uniquePrice = _.uniqBy(this.individualProduct,function (individualProduct) {
  return individualProduct.listPrice;
});




  

   


      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    
  );

  
  }

  brand;
  color;
  size;
  price;
  removeFilters(): any {
    //window.location.reload();
    this.brand='';
    this.color='';
    this.size='';
    this.price='';

  }
  

}


