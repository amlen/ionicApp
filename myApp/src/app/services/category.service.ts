import { Injectable } from '@angular/core';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category(1, 'Sport', 'ggreg'),
    new Category(2, 'Music', 'dfds'),
    new Category(3, 'IT', 'sqs'),
    new Category(4, 'Study', 'qsqdq')
  ];

  constructor() { }

  // Display
  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    let categoryLookUp: Category;
    this.categories.forEach(category => {
      if (category.id === id) {
        categoryLookUp =  category;
      }
    });

    return categoryLookUp;
  }

  // Add
  addCategory(category: Category) {
    category.id = this.categories[this.categories.length - 1].id + 1;
    this.categories.push(category);
  }
 //  update
  updateCategory(category: Category) {
    this.categories.forEach((cat, index) => {
      if (cat.id === category.id) {
        this.categories[index] = category;
      }
    });
  }

  // Delete
  deleteCategory(id: number) {
    this.categories.forEach((category, index) => {
      if (category.id === id) {
        this.categories.splice(index, 1);
      }
    });
  }
}
