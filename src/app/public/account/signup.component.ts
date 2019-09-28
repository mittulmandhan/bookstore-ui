import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  id: number;
  user: User;

  constructor(private signupService: SignupService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
  }
  SaveData(form: NgForm) {
    if (form.valid) {

        this.signupService.AddUser(this.user).subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            this.router.navigate(['/login']);
          }
        });
    }
  }

}
