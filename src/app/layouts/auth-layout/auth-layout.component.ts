import { Component } from '@angular/core';
import { AuthHeaderComponent } from "../../core/auth-header/auth-header.component";
import { AuthFooterComponent } from "../../core/auth-footer/auth-footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthHeaderComponent, AuthFooterComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
