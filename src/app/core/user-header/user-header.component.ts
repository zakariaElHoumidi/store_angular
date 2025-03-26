import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserHeaderComponent implements OnInit {
  private readonly _userService: UserService = inject(UserService);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _route: Router = inject(Router);

  items: MenuItem[] | undefined;
  logoutDisplay: boolean = false;
  userName: string = '';
  cartCount: number = 0;

  ngOnInit() {
    this.getName();
    this.getCartCount()
    this.items = [
      {
        label: 'Home',
        icon: 'pi-home',
        path: 'home'
      },
      {
        label: 'Products',
        icon: 'pi-th-large',
        path: 'products'
      },
      {
        label: 'Categories',
        icon: 'pi-sparkles',
        path: 'categories'
      },
    ];
  }

  getName(): void {
    this._userService.userName.subscribe(next => this.userName = next)
  }

  getCartCount(): void {
    const _id = localStorage.getItem('token') ?? '';

    this._userService.getCartCount(_id).subscribe(data => this.cartCount = data.cart.length);
  }

  logout(): void {
    this._authService.logout().subscribe(data => {
      localStorage.removeItem('token');
      this._route.navigate(['login']);
    });
  }
}
