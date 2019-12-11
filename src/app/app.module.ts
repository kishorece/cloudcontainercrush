import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchProductsService } from './fetch-products.service';
import { MatchHeightDirective } from './match-height.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchHeightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]),
  ],
  providers: [FetchProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
