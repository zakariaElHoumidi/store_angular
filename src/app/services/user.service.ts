import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrlGet, baseUrlPost } from '../env/apiRoot';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getCartCount(id: string): Observable<any> {
    return this._httpClient.get(`${baseUrlPost}/my-cart/${id}`);
  }

  getProducts(): Observable<any> {
    return this._httpClient.get(`${baseUrlGet}/api/products`);
  }
}
