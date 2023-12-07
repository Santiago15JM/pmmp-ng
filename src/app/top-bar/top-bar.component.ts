import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router, public Auth: AuthService) { }

  logOut() {
    this.Auth.logout()
    this.router.navigate([''])
  }
}
