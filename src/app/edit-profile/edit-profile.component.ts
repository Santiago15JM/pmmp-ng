import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { User } from 'src/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user!: User

  constructor(private router: Router, private Api: ApiService, public Auth: AuthService) { }

  ngOnInit() {
    const id = this.Auth.userId;

    this.Api.getUser(id).subscribe(u => this.user = u)
  }

  onSubmit(user: User) {
    this.Api.editUser(user).subscribe(() => {
      this.router.navigate(['dashboard']);
    })
  }
}
