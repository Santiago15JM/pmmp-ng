import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { User } from 'src/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user!: User

  constructor(private router: Router, private Api: ApiService){}

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // const id = String(routeParams.get('id'));
    const id = '1';

    this.user = this.Api.getUser(id) as User;
  }

  onSubmit(user: User) {
    this.Api.editUser(user);
    this.router.navigate(['dashboard']);
  }
}
