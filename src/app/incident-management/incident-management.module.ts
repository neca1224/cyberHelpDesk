import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseIncidentsComponent } from './pages/close-incidents/close-incidents.component';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { AddIncidentsComponent } from './pages/incidents/add-incidents/add-incidents.component';
import { ImpactIncidentsComponent } from './pages/impact-incidents/impact-incidents.component';
import { IncidentManagementRoutingModule } from './incident-management-routing.module';
import { IncidentAnalysisComponent } from './pages/incident-analysis/incident-analysis.component';
import { IncidentManagementComponent } from './pages/incident-management/incident-management.component';

@NgModule({
  declarations: [
    IncidentsComponent,
    AddIncidentsComponent,
    IncidentAnalysisComponent,
    ImpactIncidentsComponent,
    CloseIncidentsComponent,
    IncidentManagementComponent
    
  ],
  imports: [
    CommonModule,
    IncidentManagementRoutingModule
  ]
})
export class IncidentManagementModule { }
