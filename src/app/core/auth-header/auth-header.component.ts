import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.css'
})
export class AuthHeaderComponent implements OnInit {
  items: Record<string, string>[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-sign-in',
        path: '/login'
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        path: '/register'
      },
    ];
  }
}
