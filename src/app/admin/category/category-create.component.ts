import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html'
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(formbuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
    this.categoryForm = formbuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }


  ngOnInit() {

  }

saveData(form: NgForm) {
    if (form.valid) {
      this.categoryService
        .add(form.value)
        .subscribe((data: any) => {
          this.router.navigate(['/admin/category']);
        });
    }
  }


}
