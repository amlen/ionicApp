import { Component, ViewChild } from '@angular/core';
import { Event } from '../classes/event';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: Event[];

  constructor(private eventService: EventService,
              private router: Router) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  // add
  addEvent() {
    this.router.navigateByUrl('/add-event');
  }
}

