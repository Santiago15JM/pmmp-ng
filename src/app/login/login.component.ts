import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  user: LoginUser = { email: "", password: "" }

  onSubmit(user: LoginUser) {
    //  hacer que app.component.ts.isLoggedIn = true
    // api.login()
    console.log(user);
    this.router.navigate(['dashboard'])
  }
}
