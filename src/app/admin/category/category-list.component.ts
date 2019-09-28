import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
      this.categoryService.getAll().subscribe((res) => {
          this.categories = res;
      });
  }

  deleteCategory(id: number) {

  }

  editCategory(item: Category) {

  }

}
