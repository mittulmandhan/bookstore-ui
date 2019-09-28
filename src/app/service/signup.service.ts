import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'content-type': 'application/json'});
  }

  AddUser(user: User): Observable<HttpResponse<any>> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/register', JSON.stringify(user), {headers: this.headers, observe: 'response'});
  }
}
