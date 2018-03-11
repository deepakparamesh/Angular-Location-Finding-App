import { Component, OnInit } from '@angular/core';

import { EVENTS } from '../mock-events';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events: Event[];
  selectedEvent : Event;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();  
  }

  getEvents(): void{
    this.eventsService.getEvents()
      .subscribe(event => this.events = event);
  }
  
  onSelect(event: Event): void{
    this.selectedEvent = event;
  }
}
