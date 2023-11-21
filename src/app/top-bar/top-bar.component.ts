import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router, private Api: ApiService) {}

  isLoggedIn() {
    return this.Api.userId != ""
  }

  logOut() {
    this.Api.logoutUser();
    this.router.navigate(['']);
  }
}
