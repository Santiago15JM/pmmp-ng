import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

import { Pet, Vaccine } from 'src/models/pet.model';
import { AddDiseaseDTO, AddVaccineDTO, DiseaseName } from 'src/models/dto/dtos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  pet!: Pet
  diseases!: DiseaseName[]

  constructor(private route: ActivatedRoute, private Api: ApiService) { }
  newDisease = ''
  date = new Date();
  newVaccine: Vaccine = {
    name: '',
    description: '',
    date: this.date,
    validity: 0
  }
  formNewVaccineHidden = true

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'))

    this.Api.getPet(id).subscribe(p => {
      this.pet = p
      
      this.Api.allDisease(this.pet.type).subscribe(d => {
        this.diseases = d.data.allDisease
      })
    })
  }

  updateNewDisease(event: any) {
    this.newDisease = event.target.value;
  }

  osSubmitDisease() {
    if (this.newDisease != '' && !this.pet.diseases.find(disease => disease.id == this.newDisease)) {
      const dto: AddDiseaseDTO = {
        pet: this.pet.id,
        disease: this.newDisease
      }

      this.Api.addDisease(dto).subscribe(() => {
        window.location.reload()
      })
    }
  }

  osSubmitVaccine() {
    const dto: AddVaccineDTO = {
      pet: this.pet.id,
      vaccine: this.newVaccine
    }

    this.Api.addVaccine(dto).subscribe(() => {
      window.location.reload()
    })
  }

  toggleNewVaccine() {
    this.formNewVaccineHidden = !this.formNewVaccineHidden;
  }
}
