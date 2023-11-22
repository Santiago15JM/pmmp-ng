import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { ListedPet } from 'src/models/pet.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pets: ListedPet[] = []
  userId = localStorage.getItem('userId') ?? "wtf"

  constructor(private Api: ApiService, private Auth: AuthService) {}
  
  ngOnInit() {
    this.Api.getUserPets(this.userId).subscribe(pets => this.pets = pets);
  }
}
