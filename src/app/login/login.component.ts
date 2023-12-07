import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginUser } from 'src/models/dto/dtos';

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
