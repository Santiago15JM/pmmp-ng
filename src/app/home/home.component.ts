import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private ApiService: ApiService) {}

  paragraph =
    'Esta plataforma permite registrar tanto a los propietarios como a los animales a su cargo, incluyendo información sobre su estado de salud, como vacunas y antecedentes médicos, y permite estimar las condiciones de salud que puedan afectar a estas mascotas.';

  onClick() {
    this.ApiService.getAllUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
