import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Pet } from 'src/models/pet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  petDetail!: Pet
  
  constructor(private route: ActivatedRoute, private Api: ApiService){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'))

    this.petDetail = this.Api.getPet(id) as Pet
  }
}
