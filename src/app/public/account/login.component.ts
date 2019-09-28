import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  constructor(formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  login(form: NgForm) {
    if (form.valid) {
      this.authService.ValidateUser(form.value).subscribe((res) => {
        if (res != null) {
          const user: User = res;
          // console.log(obj);
          this.authService.setAuthInfo(user);

          if (user.roles.indexOf('Admin') > -1) {
              this.router.navigate(['/admin']);
          } else if (user.roles.indexOf('User') > -1) {
              this.router.navigate(['/user']);
          }
        }
      });
    }
  }


}
