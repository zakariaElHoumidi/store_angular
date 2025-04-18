import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/apiRoot';
import { ILogin, IRegister } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient: HttpClient) { }

  register(user: IRegister): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users`, user);
  }

  login(user: ILogin): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users/auth`, user);
  }

  logout(): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users/logout`, {});
  }

  authorized(): boolean {

    const token = localStorage.getItem('token');
    if (token)
      return true;
    else
      return false;
  }
}
