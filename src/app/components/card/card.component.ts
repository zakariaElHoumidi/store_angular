import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, ButtonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  private readonly _cartService: CartService = inject(CartService)
  private readonly _notificationService: NotificationService = inject(NotificationService)

  @Input({required: true}) isSmall: boolean = false;
  @Input({required: true}) products!: IProduct[];

  addToCart(productId: string): void {
    const userId = localStorage.getItem('token') ?? '';

    this._cartService.addToCart({productId, userId}).subscribe(data => {
      this._notificationService.showSuccess('Success', data);
      this._cartService.countOfCart.next(data.cart.length);

      const storeCart = localStorage.getItem('cartState')
      const cartState = storeCart ? JSON.parse(storeCart) : {};

      cartState[productId] = true;

      localStorage.setItem('cartState', JSON.stringify(cartState))
    })
  }
}
