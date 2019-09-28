import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'public-layout',
  templateUrl: './public-layout.component.html',
  styles: []
})
export class PublicLayoutComponent implements OnInit {


  user: User;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

  ngOnInit(): void {
  }


  signOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
