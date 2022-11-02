import { UserI } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserConfigServiceService {
  constructor() {}

  addUser(user: UserI) {}

  updateUser(user: UserI) {}

  deleteUser(id: number) {}

  findAllUser(page: number, limit?: number) {}
}
