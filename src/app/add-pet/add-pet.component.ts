import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AddPetDTO } from 'src/models/dto/dtos';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  constructor(private router: Router, private api: ApiService, private Auth: AuthService) { }
  
  pet: AddPetDTO = {
    name: '',
    type: '',
    breed: '',
    sex: '',
    age: 0,
    ownerId: '',
    diseases: [],
    vaccines: []
  }
  
  breeds!: string[];

  getBreeds(type: string) {
    this.pet.breed = ""
    this.api.getBreeds(type).subscribe(breeds => {
      this.breeds = breeds
    })
  }

  onSubmit(pet: AddPetDTO) {
    pet.ownerId = this.Auth.userId;
    this.api.registerPet(pet).subscribe(() => {
      this.router.navigate(['dashboard'])
    })
  }
}
