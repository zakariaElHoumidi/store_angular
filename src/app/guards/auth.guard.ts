import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const routeService = inject(Router);
  const authService = inject(AuthService);

  if (authService.authorized())
    return true;
  else
    return routeService.createUrlTree(['login']);

};
