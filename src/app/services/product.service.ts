import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../env/apiRoot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  getProducts(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/get`);
  }
}
