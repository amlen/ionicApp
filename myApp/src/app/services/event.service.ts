import { Injectable } from '@angular/core';
import { Event } from '../classes/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    new Event(1, 'kkkk', 'ddd', 2),
    new Event(2, 'lllllll', 'dddd', 2),
    new Event(3, 'lllll', 'ddd', 3)
  ];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: number): Event {
    let eventLookUp: Event;
    this.events.forEach(event => {
      if (event.id === id) {
        eventLookUp =  event;
      }
    });

    return eventLookUp;
  }

  // Add
  addEvent(newEvent: Event) {
    newEvent.id = this.events[this.events.length - 1].id + 1;
    this.events.push(newEvent);
  }

  // update
  updateEvent(newEvent: Event) {
    this.events.forEach((event, index) => {
      if (event.id === newEvent.id) {
        this.events[index] = newEvent;
      }
    });
  }

  // delete
  deleteEvent(id: number) {
    this.events.forEach((event, index) => {
      if (event.id === id) {
        this.events.splice(index, 1);
      }
    });
  }
}
