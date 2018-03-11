import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';
import { RestaurantService } from './restaurant.service';
import { EventsService } from './events.service';

import { AgmCoreModule } from '@agm/core';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantMapComponent,
    EventsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAajmnn27jkkV1p08DpmlRYoOMSJDeCVTo'
    })
  ],
  providers: [
    RestaurantService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
