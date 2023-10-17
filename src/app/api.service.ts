import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

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

}
