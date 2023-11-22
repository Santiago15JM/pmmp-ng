import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

import { Pet, DiseaseName } from 'src/models/pet.model';
import { AddDiseaseDTO } from 'src/models/dto/dtos';

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

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'))

    // this.petDetail = this.Api.getPet(id) as Pet
    this.Api.getPet(id).subscribe(p => {
      this.pet = p

      this.Api.getDiseases(this.pet.type).subscribe(d => {
        this.diseases = d
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

      this.Api.addDisease(dto).subscribe()
      window.location.reload()
    }
  }
}
