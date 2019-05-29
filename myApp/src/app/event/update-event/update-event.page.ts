import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/event';
import { Category } from '../../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { ToastController } from '@ionic/angular';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit {
  public eventId: number;
  public event: Event;
  public categories: Category[];
  constructor(private categoriesService: EventService,
              private route: ActivatedRoute,
              private router: Router,
              public toastController: ToastController,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.categoriesService.getEvent(this.eventId);
    this.categories = this.categoryService.getCategories();
    this.event = new Event(this.event.id,
                                    this.event.name,
                                    this.event.description,
                                    this.event.category.id);
  }

  // Upadte
  update() {
    if (this.event.name !== undefined && this.event.name.length !== 0) {
      this.categoriesService.updateEvent(this.event);
      this.router.navigateByUrl('/home');
      this.showsucces();
    } else {
      this.showfail();
    }
  }

  // The succes message toasts
  async showsucces() {
    const toast = await this.toastController.create({
      message: 'The event is well updated.',
      duration: 2500,
      color: 'success'
    });
    toast.present();
  }

  // The fail message toasts
  async showfail() {
    const toast = await this.toastController.create({
      message: 'Please complete all fields.',
      duration: 2500,
      color: 'danger'
    });
    toast.present();
  }
}
