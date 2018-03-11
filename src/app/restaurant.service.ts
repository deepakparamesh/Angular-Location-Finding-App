import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';

@Injectable()
export class RestaurantService {

 restaurants : Restaurant[];

// restaurtants = []
  constructor() { }

  getRestaurants(): Observable<Restaurant[]>{
    return of(RESTAURANTS);
  }

}
