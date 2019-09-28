import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../service/category.service';
import { Category } from "../../models/category";
import { Product } from "../../models/product";

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styles: []
})
export class ProductCreateComponent implements OnInit {


  categories: Category[] = [];
  uploadUrl: string;
  productForm: FormGroup;

  constructor(formbuilder: FormBuilder, private router: Router,
            private productService: ProductService, private categoryService: CategoryService) {
    this.uploadUrl = environment.apiAddress + '/file';

    this.productForm = formbuilder.group({
      name: [null, [Validators.required]],
      unitPrice: [null, [Validators.required]],
      // file: [null, [Validators.required]],
      categoryId: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  onUpload(event) {
    // console.log(event);
    const res = JSON.parse(event.xhr.response);
    console.log(res.filePath);
    this.productForm.controls.file.setValue(res.filePath);
  }

saveData(form: NgForm) {
    if (form.valid) {
      const data: Product = form.value;
      data.category = this.categories.filter((e: Category) => e.id == data.categoryId)[0];
      this.productService
        .add(data)
        .subscribe((res: any) => {
          this.router.navigate(['/admin/product']);
        });
    }
  }

}
