import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../env/apiRoot';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
