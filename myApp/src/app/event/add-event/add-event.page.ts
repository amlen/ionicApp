import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { CategoryService } from '../../services/category.service';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public categories: Category[];
  public event: Event;
 // public newEvent: Event;
  constructor(private eventsService: EventService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.categories = new CategoryService().getCategories();
    this.event = new Event(1,
                          'name',
                          'Description',
                          5);
  }

  // Add
  add() {
    if (this.event.name !== undefined && this.event.name.length !== 0) {
      this.eventsService.addEvent(this.event);
      this.router.navigateByUrl('/home');
      this.showsucces();
    } else {
      this.showfail();
    }
  }

  // The succes message toasts
  async showsucces() {
    const toast = await this.toastController.create({
      message: 'the event is well added',
      duration: 2500,
      color: 'success'
    });
    toast.present();
  }

  // The fail message toasts
  async showfail() {
    const toast = await this.toastController.create({
      message: 'Please complete all fields',
      duration: 2500,
      color: 'danger'
    });
    toast.present();
  }
}
