import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { LoginUser } from 'src/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) { }
  user: LoginUser = { email: "", password: "" }

  onSubmit(user: LoginUser) {
    this.auth.login(user).subscribe(id => {
      if (id)
        this.router.navigate(['dashboard'])
    })
  }
}
