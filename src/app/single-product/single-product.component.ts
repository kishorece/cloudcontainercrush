import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchProductsService } from '../fetch-products.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public productList;
  public image;
  public description;
  public price;
  public avail;
  public long;
  public size;
  public color;
  public brand;
  public familyName;
  public commodityName;
  public priceEffectiveDate;
  constructor(private location: Location,private _route: ActivatedRoute,private router: Router,private productservice: FetchProductsService) { }

  ngOnInit() {
    let searchTerm = this._route.snapshot.paramMap.get('itemNumber');

    this.productservice.getSingleProductDetails(searchTerm).subscribe(
      data => {
        console.log(data);
        this.productList = data.singleProduct;
        this.image = data.singleProduct[0].itemNumber;
        this.description = data.singleProduct[0].longDescription;
        this.price = data.singleProduct[0].listPrice;
        this.avail = data.singleProduct[0].inStock;
        this.long = data.singleProduct[0].longDescription;
        this.size = data.singleProduct[0].skuValue1;
        this.color = data.singleProduct[0].skuValue2;
        this.brand = data.singleProduct[0].brand;
        this.familyName = data.singleProduct[0].familyName;
        this.commodityName = data.singleProduct[0].commodityName;
        this.priceEffectiveDate = data.singleProduct[0].priceEffectiveDate;

        console.log(this.image);
  
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
