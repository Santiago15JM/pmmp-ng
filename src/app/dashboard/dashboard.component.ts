import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { ListedPet, Pet } from 'src/models/pet.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pets: ListedPet[] = []

  constructor(private Api: ApiService) {}
  
  ngOnInit() {
    this.Api.getUserPets().subscribe(pets => {
      this.pets = pets;
    });
  }

}
