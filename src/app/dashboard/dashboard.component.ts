import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  pets: any[] = [{
    id: 1,
    name: 'Firulais',
    type: 'perro',
    breed: 'criollo',
    age: 4,
  },
  {
    id: 2,
    name: 'Misifus',
    type: 'gato',
    breed: 'criollo',
    age: 6,
  },
  ]
}
