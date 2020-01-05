import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../fetch-products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allDetails: any;
  className:any;
  categories = ["Clothing", "Footwear", "Luggage and handbags and packs and cases","Personal care products","Sewing supplies and accessories"];
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
