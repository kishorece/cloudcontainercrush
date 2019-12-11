import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../fetch-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allDetails: any;
  constructor(private productservice: FetchProductsService) { }


  ngOnInit() {
    this.productservice.getAllDetails().subscribe(
      
      data => {
        console.log(data);
        this.allDetails = data.plannedEvents;
        return this.allDetails;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    );

  }

}
