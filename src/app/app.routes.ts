import { CategoryComponent } from './pages/category/category.component';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { registerGuard } from './guards/register.guard';

export const routes: Routes = [
  // Auth
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        component => component.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            component => component.LoginComponent
          )
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register.component').then(
            component => component.RegisterComponent
          ),
        canDeactivate: [registerGuard]
      }
    ]
  },

  // User
  {
    path: '',
    loadComponent: () =>
      import('./layouts/user-layout/user-layout.component').then(
        component => component.UserLayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadComponent: ()=>import('./pages/home/home.component').then(component=>component.HomeComponent)
      },
      {
        path: 'cart/:id',
        loadComponent: ()=>import('./pages/cart/cart.component').then(component=>component.CartComponent)
      },
      {
        path: 'products',
        loadComponent: ()=>import('./pages/products/products.component').then(component=>component.ProductsComponent)
      },
      {
        path: 'details',
        loadComponent: ()=>import('./pages/details/details.component').then(component=>component.DetailsComponent)
      },
      {
        path: 'categories',
        loadComponent: ()=>import('./pages/category/category.component').then(component=>component.CategoryComponent)
      }
    ]
  },
];
