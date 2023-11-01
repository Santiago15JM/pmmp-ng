import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get(this.url + 'users/getUser?id=' + id)
  }

  getAllUsers() {
    return this.http.get(this.url + 'users/getAll')
  }

  getPet(id: string) {
    let date = new Date('2020-02-15');
    let revaccination = new Date('2024-02-30');
    let petDetail = {
      id: 1,
      name: 'Firulais',
      type: 'perro',
      breed: 'criollo',
      sex: 'masculino',
      age: 4,
      diseases: [
        {
          id: 1,
          name: 'moquillo',
          description: 'descripcion de moquillo'
        },
        {
          id: 2,
          name: 'hongos',
          description: 'descripcion de hongos'
        },
        {
          id: 3,
          name: 'rabia',
          description: 'descripcion de rabia'
        },
        {
          id: 4,
          name: 'cancer',
          description: 'descripcion de cancer'
        },
        {
          id: 5,
          name: 'gastroenteritis',
          description: 'descripcion de gastroenteritis'
        }
      ],
      recommendations: [
        {
          id: 1,
          description: 'visita frecuente al veterinario'
        },
        {
          id: 2,
          description: 'revisar esquema de vacunacion'
        },
        {
          id: 3,
          description: 'cuidados basicos'
        }
      ],
      vaccines: [
        {
          id: 1,
          name: 'vacuna 1',
          description: 'vacuna para asdasd',
          date: date,
          revaccination: revaccination
        },
        {
          id: 2,
          name: 'vacuna 2',
          description: 'vacuna para asdasdqwe',
          date: date,
          revaccination: revaccination
        }
      ]
    }
    return petDetail
  }

  registerPet(pet: Pet) {
    console.log(pet);
  }

  getSummaries(): any {
    return [{
      type: "Perros",
      stats: [
        { stat: "El 12% de los perros criollos padecen de rabia", value: 12 },
        { stat: "El 30% de los perros Beagle padecen de gastroenteritis", value: 30 }
      ],
      recommendations: ["Vacunar contra la rabia", "Proporcionar una dieta adecuada"]
    }, {
      type: "Gatos",
      stats: [
        { stat: "El 27% de los gatos criollos padecen de leucemia", value: 27 },
        { stat: "El 40% de los gatos criollos padecen de sida", value: 40 }
      ],
      recommendations: ["Vacunar contra la leucemia", "Aislar contacto con otros gatos", "Mantener a los gatos en interiores"]
    }]
  }
}
