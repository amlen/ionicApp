import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/category';
@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.page.html',
  styleUrls: ['./detail-category.page.scss'],
})
export class DetailCategoryPage implements OnInit {
  public categoryId: number;
  public category: Category;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }

  // Delete
  delete(id: number) {
    this.categoryService.deleteCategory(id);
    this.router.navigateByUrl('/category');
  }

}
