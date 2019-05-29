import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: Category[];
  constructor(private categoriesService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

}
