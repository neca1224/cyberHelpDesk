import { UserI } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserConfigServiceService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addUser(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(`${this.baseUrl}/usuarios`, user);
  }

  updateUser(user: UserI) {
    return this.http.put<UserI>(
      `${this.baseUrl}/usuarios/${user.id}`,
      user
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }

  findAllMalware(): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${this.baseUrl}/usuarios`);
  }

  findAllPag(_page: number=1, _limit: number=2): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${this.baseUrl}/usuarios/`, {
      params: {
        _limit ,
        _page
      },
    });
  }
}
