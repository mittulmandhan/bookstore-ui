import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
      this.headers = new HttpHeaders({ authorization: `Bearer ${this.authService.user.token}`, 'Content-Type': 'application/json' });
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.apiAddress + '/category', { headers: this.headers });
  }

  get(id: number): Observable<Category> {
     return this.httpClient.get<Category>(environment.apiAddress + `/category/${id}`, { headers: this.headers });
  }

  add(category: Category): Observable<any> {
     return this.httpClient.post<any>(environment.apiAddress + '/category', JSON.stringify(category), { headers: this.headers });
  }

  update(category: Category): Observable<any> {
     return this.httpClient.put<any>(environment.apiAddress + `/category`, JSON.stringify(category), { headers: this.headers });
  }

  delete(id: number ): Observable<any> {
     return this.httpClient.delete<any>(environment.apiAddress + `/category/${id}`);
  }
}
