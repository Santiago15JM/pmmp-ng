import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { User } from "src/models/user.model";
import { AddDiseaseDTO, AddVaccineDTO, DiseaseName, ListedPet, LoginUser, RegisterPet, RegisterUser } from 'src/models/dto/dtos';
import { Summary } from 'src/models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8085/'

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

  getPublicStatus(userId: string): any {
    return this.http.get<Summary[]>(`${this.url}stats/getPublicStatus?user=${userId}`);
  }

  getDiseases(type: string) {
    return this.http.get<DiseaseName[]>(`${this.url}diseases?type=${type}`);
  }

  getBreeds(type: String) {
    // return ["Pastor", "Pitbull", "Criollo"]
    return this.http.get<string[]>(`${this.url}pets/getBreeds?type=${type}`);
  }

  addDisease(dto: AddDiseaseDTO) {
    return this.http.post(`${this.url}pets/addDisease`, dto);
  }

  addVaccine(dto: AddVaccineDTO) {
    return this.http.post(`${this.url}pets/addVaccine`, dto)
  }
}
