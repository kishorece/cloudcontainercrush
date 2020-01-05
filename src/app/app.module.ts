import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchProductsService } from './fetch-products.service';
import { MatchHeightDirective } from './match-height.directive';
import { ClassComponentComponent } from './class-component/class-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AudioComponentComponent } from './audio-component/audio-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FullTextSearchComponent } from './full-text-search/full-text-search.component';
import { SingleProductComponent } from './single-product/single-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchHeightDirective,
    ClassComponentComponent,
    ProductDetailsComponent,
    AudioComponentComponent,
    FullTextSearchComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'category/:category', component : ClassComponentComponent},
      {path: 'product/:className', component: ProductDetailsComponent},
      {path: 'audio', component: AudioComponentComponent},
      {path: 'search/:searchitem', component: FullTextSearchComponent},
      {path: 'item/:itemNumber', component : SingleProductComponent}
  ]),
  ],
  providers: [FetchProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

