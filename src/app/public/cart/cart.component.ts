import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService, private authService: AuthService, private storeService: StoreService, private router: Router) { }

  ngOnInit() {
  }

  checkout() {
    if (this.authService.user.isAuth) {
      this.cart.userId = this.authService.user.userId;

      this.storeService.saveCart(this.cart).subscribe((res: any) => {
        if (res.id !== undefined) {
          this.cart.checkoutPayUmoney(res.id, this.authService.user);
        }
      });
    } else {
      this.router.navigate(['login'], { queryParams: { ref: 'cart' } });
    }
  }

}
