import { Component, OnInit } from '@angular/core';

import { RESTAURANTS } from '../mock-restaurants';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[];

  selectedRestaurant : Restaurant;

  constructor(private restaurantService: RestaurantService) { 

  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void{
     this.restaurantService.getRestaurants()
        .subscribe(restaurant => this.restaurants = restaurant);
  }

  

  onSelect(restaurant: Restaurant): void{
    this.selectedRestaurant = restaurant;
  }
}
