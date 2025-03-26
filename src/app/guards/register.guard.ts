import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../pages/auth/register/register.component';

export const registerGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.user.valid) {
    const alert = confirm('Are you sure you want to leave this page? Changes will not be saved.');

    return alert;
  }
  return true;
};
