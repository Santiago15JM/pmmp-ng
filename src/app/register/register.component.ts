import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';
import { RegisterUser } from 'src/models/dto/dtos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: RegisterUser = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: 0,
    address: ''
  }

  constructor(private router: Router, private Api: ApiService){}

  onSubmit(user: RegisterUser) {
    this.Api.createUser(user).subscribe(()=>{
      this.router.navigate(['login']);
    })
  }
}
