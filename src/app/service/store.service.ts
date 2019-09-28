import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
      this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(environment.apiAddress + '/store');
  }

  saveCart(cart: CartService): Observable<any> {
      return this.httpClient.post<any>(environment.apiAddress + '/store/cart', JSON.stringify(cart), { headers: this.headers });
  }
}
