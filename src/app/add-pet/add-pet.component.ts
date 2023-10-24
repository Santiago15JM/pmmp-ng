import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Pet } from '../../models/pet.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  pet = {} as Pet

  constructor(private router: Router, private api: ApiService) {}

  onSubmit(pet: Pet) {
    this.api.registerPet(pet)
    this.router.navigate(['dashboard'])
  }
}
