import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';

import { LoginUser } from 'src/models/user.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedIn = this._isLoggedIn.asObservable()
  userId: string = ""

  constructor(private Api: ApiService) {
    this.userId = localStorage.getItem('userId') ?? ""
    this._isLoggedIn.next(!!this.userId)
  }

  login(user: LoginUser) {
    return this.Api.loginUser(user).pipe(
      tap(res => {
        localStorage.setItem('userId', res)
        this._isLoggedIn.next(true)
      })
    )
  }

  logout() {
    this.userId = ""
    localStorage.removeItem('userId')
    this._isLoggedIn.next(false)
  }
}
