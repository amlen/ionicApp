import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../classes/event';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  public eventId: number;
  public event: Event;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEvent(this.eventId);
  }

  // Delete
  delete(id: number) {
    this.eventService.deleteEvent(id);
    this.router.navigateByUrl('/home');
  }
}
