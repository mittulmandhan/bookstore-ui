import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headers: HttpHeaders;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
     this.headers = new HttpHeaders({ authorization: `Bearer ${this.authService.user.token}`, 'Content-Type': 'application/json' });
   }

   getAll(): Observable<Product[]> {
     return this.httpClient.get<Product[]>(environment.apiAddress + '/product', { headers: this.headers });
   }

   get(id: string): Observable<Product> {
     return this.httpClient.get<Product>(environment.apiAddress + `/product/${id}`, { headers: this.headers });
   }

   add(product: Product): Observable<any> {
     return this.httpClient.post<any>(environment.apiAddress + '/product', JSON.stringify(product), { headers: this.headers });
   }

   update(product: Product): Observable<any> {
     return this.httpClient.put<any>(environment.apiAddress + `/product`, JSON.stringify(product), { headers: this.headers });
   }

   delete(id: string): Observable<any> {
     return this.httpClient.delete<any>(environment.apiAddress + `/product/${id}`);
   }
}



