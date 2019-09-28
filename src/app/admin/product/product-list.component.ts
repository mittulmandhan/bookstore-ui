import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }


  ngOnInit() {
      this.productService.getAll().subscribe((res) => {
          this.products = res;
      });
  }

  deleteProduct(id: number) {

  }

  editProduct(item: Product) {

  }

}
