import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { User } from "src/models/user.model";
import { AddDiseaseDTO, AddVaccineDTO, DiseaseName, ListedPet, LoginUser, RegisterPet, RegisterUser } from 'src/models/dto/dtos';
import { Summary } from 'src/models/stats.model';
import { Apollo, gql } from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = 'http://localhost:8085/'
  // url = 'https://api-gateway-app.salmonstone-1eb936e3.eastus.azurecontainerapps.io/'

  user_url = 'https://user-service-app--31h3btz.salmonstone-1eb936e3.eastus.azurecontainerapps.io/'
  stats_url = 'https://statistics-service-app.salmonstone-1eb936e3.eastus.azurecontainerapps.io/'
  pet_url = 'https://pet-service-app.salmonstone-1eb936e3.eastus.azurecontainerapps.io/'
  disease_url = 'https://disease-service-app.salmonstone-1eb936e3.eastus.azurecontainerapps.io/'

  constructor(private http: HttpClient, private apollo: Apollo) { }

  createUser(user: RegisterUser) {
    return this.http.post<User>(`${this.user_url}users/addUser`, user);
  }

  loginUser(user: LoginUser) {
    return this.http.post(`${this.user_url}users/login`, user, { responseType: 'text' })
  }

  getUser(id: string) {
    return this.http.get<User>(`${this.user_url}users/getUser?id=${id}`);
  }

  editUser(user: User) {
    return this.http.put<User>(`${this.user_url}users/editUser`, user);
  }

  getPet(id: string) {
    return this.http.get<Pet>(`${this.pet_url}pets/getPet?id=${id}`);
  }

  registerPet(pet: RegisterPet) {
    return this.http.post<Pet>(`${this.pet_url}pets/addPet`, pet);
  }

  getUserPets(userId: string) {
    return this.http.get<ListedPet[]>(`${this.pet_url}pets/getUserPets?u=${userId}`);
  }

  getPublicStatus(userId: string): any {
    return this.http.get<Summary[]>(`${this.stats_url}stats/getPublicStatus?user=${userId}`);
  }

  // getDiseases(type: string) {
  //   return this.http.get<DiseaseName[]>(`${this.url}diseases?type=${type}`);
  // }

  getBreeds(type: String) {
    // return ["Pastor", "Pitbull", "Criollo"]
    return this.http.get<string[]>(`${this.pet_url}pets/getBreeds?type=${type}`);
  }

  addDisease(dto: AddDiseaseDTO) {
    return this.http.post(`${this.pet_url}pets/addDisease`, dto);
  }

  addVaccine(dto: AddVaccineDTO) {
    return this.http.post(`${this.pet_url}pets/addVaccine`, dto)
  }


  DISEASES = gql`
  query getDiseases($type: String!){
      allDisease(type: $type){
        id
        name
      }
    }
  `

  allDisease(type: string) {
    return this.apollo.watchQuery<any>({
      query: this.DISEASES,
      variables: {
        type: type
      }
    }).valueChanges
  }

}
