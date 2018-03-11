import { Component, OnInit, Input, ViewChild, Injectable } from '@angular/core';

import { RESTAURANTS } from '../mock-restaurants';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import {  } from '@types/googlemaps';
@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.css']
})


export class RestaurantMapComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement:any;
  map: google.maps.Map
  
  // restaurants = RESTAURANTS;
  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService ) { 
    console.log(this.restaurantService.restaurtants)
    
  }

  ngOnInit() {
    let map;
    
    var mapProp = {
      center: new google.maps.LatLng(35.9375, 14.3754),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement,mapProp);

    // console.log(this.restaurant.latitude + this.restaurant.longitude);

    // console.log(this.restaurants)  
  }

}
