import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Incidentes } from "../pages/incidents/incident.interface";

@Injectable({
    providedIn: 'root'
  })
export class IncidentsService {

    baseUrl: string = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getIncident() {
        return this.http.get<Incidentes[]>(`${this.baseUrl}/incidentes`)

    }
}