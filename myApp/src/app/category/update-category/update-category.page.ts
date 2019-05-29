import { Component, OnInit } from '@angular/core';
import { Category } from '../../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.page.html',
  styleUrls: ['./update-category.page.scss'],
})
export class UpdateCategoryPage implements OnInit {
  public categoryId: number;
  public category: Category;
  constructor(private categoriesService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoriesService.getCategory(this.categoryId);
    this.category = new Category(this.category.id,
                                    this.category.name,
                                    this.category.description);
  }

  // Upadte
  update() {
    if (this.category.name !== undefined && this.category.name.length !== 0) {
      this.categoriesService.updateCategory(this.category);
      this.router.navigateByUrl('/category');
      this.showsucces();
    } else {
      this.showfail();
    }
  }

  // The succes message toasts
  async showsucces() {
    const toast = await this.toastController.create({
      message: 'The category is well updated.',
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
