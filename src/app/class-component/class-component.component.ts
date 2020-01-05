import { Component, OnInit, Input } from '@angular/core';
import { FetchProductsService } from '../fetch-products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {

  category;
  classNames;
  allDetails: any;
  constructor(private productservice: FetchProductsService,private _route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.category = this._route.snapshot.paramMap.get('category');

    this.classNames = this.category;

    this.productservice.getClassDetails(this.classNames).subscribe(
      
      data => {
        console.log(data);
        this.allDetails = data.classDetails
        return this.allDetails;
      },
      error =>{
        console.log("some error occured1");
        console.log(error.errorMessage);
      }

  
    )}

}
