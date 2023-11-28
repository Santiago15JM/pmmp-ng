import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Pet } from '../../models/pet.model'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  pet: Pet = {
    name: '',
    type: '',
    breed: '',
    sex: '',
    ownerId: ''
  } as Pet

  breeds!: string[];

  constructor(private router: Router, private api: ApiService, private Auth: AuthService) { }

  // ngOnInit() {
  // this.api.getBreeds(this.pet.type).subscribe((breeds: any) => {
  //       this.breeds = breeds;
  //     },
  //     error => {
  //       console.error('Error al obtener las razas:', error);
  //     }
  //   );
  // }

  getBreeds(type: string) {
    this.api.getBreeds(type).subscribe(breeds => {
      this.breeds = breeds
    })
  }

  onSubmit(pet: Pet) {
    pet.ownerId = this.Auth.userId;
    this.api.registerPet(pet).subscribe(() => {
      this.router.navigate(['dashboard'])
    })
  }
}
