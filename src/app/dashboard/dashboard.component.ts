import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ListedPet } from 'src/models/dto/dtos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private Api: ApiService) {}

  pets: ListedPet[] = []
  userId = localStorage.getItem('userId') ?? "wtf"

  ngOnInit() {
    this.Api.getUserPets(this.userId).subscribe(pets => this.pets = pets);
  }
}
