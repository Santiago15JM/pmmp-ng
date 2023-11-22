import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ListedPet, Pet, RegisterPet, DiseaseName } from 'src/models/pet.model';
import { User, RegisterUser, LoginUser } from "src/models/user.model";
import { AddDiseaseDTO } from 'src/models/dto/dtos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8081/'

  constructor(private http: HttpClient) { }

  createUser(user: RegisterUser) {
    return this.http.post<User>(`${this.url}users/addUser`, user);
  }

  loginUser(user: LoginUser) {
    return this.http.post(`${this.url}users/login`, user, { responseType: 'text' })
  }

  // logoutUser() {
  //   this.userId = '';
  // }

  getUser(id: string) {
    return this.http.get<User>(`${this.url}users/getUser?id=${id}`);
    // let user: User = {
    //   id: "123",
    //   name: 'Burgundofora Segismundo',
    //   lastname: 'Hitler Bedolla',
    //   email: 'burundofora@email.com',
    //   password: '123123asdasd',
    //   phone: 5555555555,
    //   address: 'calle 666 # 67-76'
    // }
    // return user
  }

  editUser(user: User) {
    return this.http.post<User>(`${this.url}users/editUser`, user);
  }

  getPet(id: string) {
    return this.http.get<Pet>(`${this.url}pets/getPet?id=${id}`);
    // let revaccination = new Date('2024-02-30');
    // let petDetail: Pet = {
    //   id: "1",
    //   ownerId: "",
    //   name: 'Firulais',
    //   type: 'perro',
    //   breed: 'criollo',
    //   sex: 'masculino',
    //   age: 4,
    //   diseases: [
    //     {
    //       id: "1",
    //       name: 'moquillo',
    //       description: 'descripcion de moquillo',
    //       recommendations: []
    //     },
    //     {
    //       id: "2",
    //       name: 'hongos',
    //       description: 'descripcion de hongos',
    //       recommendations: []
    //     },
    //     {
    //       id: "3",
    //       name: 'rabia',
    //       description: 'descripcion de rabia',
    //       recommendations: []
    //     },
    //     {
    //       id: "4",
    //       name: 'cancer',
    //       description: 'descripcion de cancer',
    //       recommendations: []
    //     },
    //     {
    //       id: "5",
    //       name: 'gastroenteritis',
    //       description: 'descripcion de gastroenteritis',
    //       recommendations: []
    //     }
    //   ],
    //   vaccines: [
    //     {
    //       id: "1",
    //       name: 'vacuna 1',
    //       description: 'vacuna para asdasd',
    //       date: date,
    //       validity: 6
    //       // revaccination: revaccination
    //     },
    //     {
    //       id: "2",
    //       name: 'vacuna 2',
    //       description: 'vacuna para asdasdqwe',
    //       date: date,
    //       validity: 6
    //       // revaccination: revaccination
    //     }
    //   ]
    // }
    // return petDetail
  }

  registerPet(pet: RegisterPet) {
    return this.http.post<Pet>(`${this.url}pets/addPet`, pet);
  }

  getUserPets(userId: string) {
    return this.http.get<ListedPet[]>(`${this.url}pets/getUserPets?u=${userId}`);
  }

  getPublicStatus(): any {
    return this.http.get(`${this.url}stats/getPublicStatus`);
    // return [{
    //   type: "Perros",
    //   breed:'criollos',
    //   stats: { stat: "El 12% de los perros criollos padecen de rabia", value: 12 },
    //   recommendations: ["Vacunar contra la rabia", "Proporcionar una dieta adecuada"]
    // },
    // {
    //   type: "Perros",
    //   stats: { stat: "El 30% de los perros Beagle padecen de gastroenteritis", value: 30 }
    // }
    // , {
    //   type: "Gatos",
    //   stats: [
    //     { stat: "El 27% de los gatos criollos padecen de leucemia", value: 27 },
    //     { stat: "El 40% de los gatos criollos padecen de sida", value: 40 }
    //   ],
    //   recommendations: ["Vacunar contra la leucemia", "Aislar contacto con otros gatos", "Mantener a los gatos en interiores"]
    // }]
  }

  getDiseases(type: string) {
    return this.http.get<DiseaseName[]>(`${this.url}diseases?type=${type}`);
  }

  addDisease(dto: AddDiseaseDTO) {
    return this.http.post(`${this.url}pets/addDisease`, dto);
  }
}
