import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantMapComponent } from './restaurant-map/restaurant-map.component';

import { EventsComponent } from './events/events.component';


const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'restaurantmap', component: RestaurantMapComponent },
  { path: 'events', component: EventsComponent},
]

@NgModule({
  exports : [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
