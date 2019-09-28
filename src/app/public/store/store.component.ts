import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../models/product';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {

  products: Product[];
  constructor(private storeService: StoreService, public cart: CartService) { }


 ngOnInit() {
    this.storeService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
