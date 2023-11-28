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

  getUser(id: string) {
    return this.http.get<User>(`${this.url}users/getUser?id=${id}`);
  }

  editUser(user: User) {
    return this.http.put<User>(`${this.url}users/editUser`, user);
  }

  getPet(id: string) {
    return this.http.get<Pet>(`${this.url}pets/getPet?id=${id}`);
  }

  registerPet(pet: RegisterPet) {
    return this.http.post<Pet>(`${this.url}pets/addPet`, pet);
  }

  getUserPets(userId: string) {
    return this.http.get<ListedPet[]>(`${this.url}pets/getUserPets?u=${userId}`);
  }

  getPublicStatus(): any {
    return this.http.get(`${this.url}stats/getPublicStatus`);
  }

  getDiseases(type: string) {
    return this.http.get<DiseaseName[]>(`${this.url}diseases?type=${type}`);
  }

  addDisease(dto: AddDiseaseDTO) {
    return this.http.post(`${this.url}pets/addDisease`, dto);
  }
}
