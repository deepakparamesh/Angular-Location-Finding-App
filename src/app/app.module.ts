import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { RestaurantService } from './restaurant.service'

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAajmnn27jkkV1p08DpmlRYoOMSJDeCVTo'
    })
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
