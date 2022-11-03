import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToolsI } from '../interfaces/tools.interface';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addTools(tools: ToolsI): Observable<ToolsI> {
    return this.http.post<ToolsI>(`${this.baseUrl}/tools`, tools);
  }

  updateTools(tools: ToolsI) {
    return this.http.put<ToolsI>(
      `${this.baseUrl}/tools/${tools.id}`,
      tools
    );
  }

  deleteTools(id: number) {
    return this.http.delete(`${this.baseUrl}/tools/${id}`);
  }

  findAllTools(): Observable<ToolsI[]> {
    return this.http.get<ToolsI[]>(`${this.baseUrl}/tools`);
  }

  findAllPag(_page: number=1, _limit: number=2): Observable<ToolsI[]> {
    return this.http.get<ToolsI[]>(`${this.baseUrl}/tools/`, {
      params: {
        _limit ,
        _page
      },
    });
  }
}
