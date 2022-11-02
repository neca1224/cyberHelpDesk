import { Component, OnInit } from '@angular/core';
import { Incidentes } from './incident.interface';
import { IncidentsService } from '../../services/incidents.service';

@Component({
  selector: 'chd-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {


  loading: boolean = true;

  incidentes: Incidentes[]= [];

  constructor(private incidentService: IncidentsService) { }

  ngOnInit(): void {
    this.incidentService.getIncident().subscribe(incidentes => {
      this.incidentes = incidentes;
      this.loading = false;
    });
  }
  handleInput(event: Event) {
    return (event.target as HTMLInputElement).value;

  }

}
