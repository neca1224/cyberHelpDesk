import { Injectable } from '@angular/core';
import { ToolsI } from '../interfaces/tools.interface';

@Injectable({
  providedIn: 'root',
})
export class ToolsServiceService {
  constructor() {}

  addTools(tools: ToolsI) {}

  updateTools(tools: ToolsI) {}

  deleteTools(id: number) {}

  findAllTools(page: number, limit?: number) {}
}
