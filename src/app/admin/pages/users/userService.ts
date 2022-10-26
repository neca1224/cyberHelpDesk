import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<User[]>('assets/user.json')

    }
}