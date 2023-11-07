import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { LoginUser } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private Api: ApiService) { }
  user: LoginUser = { email: "", password: "" }

  onSubmit(user: LoginUser) {
    //  hacer que app.component.ts.isLoggedIn = true
    // api.login()
    this.Api.loginUser(user);
    this.router.navigate(['dashboard'])
  }
}
