import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../env/apiRoot';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  countOfCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCartCount(id: string): Observable<any> {
    return this._httpClient.get(`${baseUrl}/my-cart/${id}`);
  }
  
  addToCart(data: { productId: string; userId: string }): Observable<any> {
    return this._httpClient.post(`${baseUrl}/add-to-cart`, { ...data });
  }
}
