import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-layout',
  templateUrl: './user-layout.component.html',
  styles: []
})
export class UserLayoutComponent implements OnInit {

  user: User;
  constructor(private authService: AuthService, private router: Router) {
    this.user = authService.user;
  }


  ngOnInit() { }

  signOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

}
