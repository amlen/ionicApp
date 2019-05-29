import { Component, OnInit } from '@angular/core';
import { Category } from '../../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  public categoryId: number;
  public category: Category;
 // public newCategory: Category;
  constructor(private categoriesService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoriesService.getCategory(this.categoryId);
    this.category = new Category(1, 'Name', 'Description');
  }

  // Add
  add() {
    if (this.category.name !== undefined && this.category.name.length !== 0) {
      this.categoriesService.addCategory(this.category);
      this.router.navigateByUrl('/category');
      this.showsucces();
    } else {
      this.showfail();
    }
  }

  // The succes message toasts
  async showsucces() {
    const toast = await this.toastController.create({
      message: 'the category is well added',
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
