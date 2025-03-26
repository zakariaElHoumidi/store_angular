import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, ButtonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) isSmall: boolean = false;
  @Input({required: true}) products!: IProduct[];
}
