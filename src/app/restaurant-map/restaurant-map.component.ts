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
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService ) { }

  ngOnInit() {
    let map;

    var mapProp = {
      center: new google.maps.LatLng(35.9375, 14.3754),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement,mapProp);

     this.restaurants = this.restaurantService.getLatLan();

   
   
    for (var i=0;i<this.restaurants.length;i++){
      let latLang = { lat: Number(this.restaurants[i].latitude), lng: Number(this.restaurants[i].longitude)};

      let marker = new google.maps.Marker({
        position: latLang,
        title: this.restaurants[i].name 
    })
  
      // place marker in map
      marker.setMap(this.map)
    }

    // for(let restaurant in this.restaurants){
    //   let latLang = { lat: Number(restaurant.latitude), lng: Number(restaurant.longitude)};

    //   let marker = new google.maps.Marker({
    //     position: latLang
    //     // title: location.locationName
    // })
  
    //   // place marker in map
    //   marker.setMap(map)
    // }  
  }


}
