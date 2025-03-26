import { Component } from '@angular/core';
import { UserHeaderComponent } from "../../core/user-header/user-header.component";
import { UserFooterComponent } from "../../core/user-footer/user-footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [UserHeaderComponent, UserFooterComponent, RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
