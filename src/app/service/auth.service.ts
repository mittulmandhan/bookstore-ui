import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    headers: HttpHeaders;
    user: User;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.user = new User();
        this.loadAuthInfo();
    }

    setAuthorizationHeader() {
        if (this.user.isAuth) {
            // console.log(this.user.token);
            this.headers.append('Authorization', this.user.token);
        }
    }

    clearAuthorizationHeader() {
        this.headers.delete('Authorization');
    }

    logOut() {
        sessionStorage.setItem('authInfo', null);
        this.clearAuthorizationHeader();

        this.user.isAuth = false;
        this.user.name = '';
        this.user.email = '';
        this.user.contact = '';
        this.user.userId = '';
        this.user.token = '';
    }
    private loadAuthInfo() {
        const data = JSON.parse(sessionStorage.getItem('authInfo'));
        if (data !== undefined && data != null) {
                this.user.email = data.email;
                this.user.name = data.name;
                this.user.userId = data.userId;
                this.user.isAuth = true;
                this.user.token = data.token;
                this.user.roles = data.roles;
        }
    }
    setAuthInfo(data) {
        // console.log(data);
        if (data !== undefined && data != null) {
            this.user.email = data.email;
            this.user.name = data.name;
            this.user.userId = data.userId;
            this.user.isAuth = true;
            this.user.token = data.token;
            this.user.roles = data.roles;

            sessionStorage.setItem('authInfo', JSON.stringify(this.user));
            this.setAuthorizationHeader();
        }
    }


    ValidateUser(model: Login ): Observable<User> {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.post<User>(environment.apiAddress + '/authenticate', JSON.stringify(model), { headers : this.headers});
    }

    // signup(user: User): Observable<Response> {
    //     return this.http
    //         .post(`${this.globalService.apiAddress}/auth/signup`, JSON.stringify(user), { headers: this.headers })
    //         .catch((error: any) => Observable.throw('Server error'));
    // }
}
