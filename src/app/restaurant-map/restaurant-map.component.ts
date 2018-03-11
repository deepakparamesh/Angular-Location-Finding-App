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
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i=0; i<this.restaurants.length; i++){

       marker = new google.maps.Marker({
        position: new google.maps.LatLng(Number(this.restaurants[i].latitude), Number(this.restaurants[i].longitude)),
        map: map,
        title: this.restaurants[i].name,
      });
      
      //place marker in map
      marker.setMap(this.map)

      google.maps.event.addListener(marker, 'click', (function(marker, i){
        return function(){
          infowindow.setContent(this.restaurants[i].name);
          infowindow.open(map, marker)
        }
      }) (marker, i));

    }
  }


}
