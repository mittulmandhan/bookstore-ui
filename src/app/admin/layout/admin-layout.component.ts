import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit {

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
