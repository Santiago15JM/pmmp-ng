import { inject } from '@angular/core';
import { type CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService)
  return Auth.isLoggedIn
};
