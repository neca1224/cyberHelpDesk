import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddIncidentsComponent } from './pages/incidents/add-incidents/add-incidents.component';
import { CloseIncidentsComponent } from './pages/close-incidents/close-incidents.component';
import { ImpactIncidentsComponent } from './pages/impact-incidents/impact-incidents.component';
import { IncidentAnalysisComponent } from './pages/incident-analysis/incident-analysis.component';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { IncidentManagementComponent } from './pages/incident-management/incident-management.component';

const routes: Routes = [
  {
    path: '',
    component: IncidentManagementComponent,
    children:[
      { path: 'incidentes', component: IncidentsComponent },
      { path: 'incidentes/agregar', component: AddIncidentsComponent },
      { path: 'incidentes/editar/:id', component: AddIncidentsComponent },

      { path: 'analisis', component: IncidentAnalysisComponent },
      { path: 'gestion', component: IncidentManagementComponent },
      { path: 'impacto', component: ImpactIncidentsComponent },

      { path: 'cerrar', component: CloseIncidentsComponent },
      { path: '**', redirectTo: 'incidentes' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class IncidentManagementRoutingModule { }
