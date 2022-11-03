import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddIncidentsComponent } from './pages/incidents/add-incidents/add-incidents.component';
import { CloseIncidentsComponent } from './pages/close-incidents/close-incidents.component';
import { ImpactIncidentsComponent } from './pages/impact-incidents/impact-incidents.component';
import { IncidentAnalysisComponent } from './pages/incident-analysis/incident-analysis.component';
import { IncidentManagementComponent } from './pages/incident-management/incident-management.component';
import { IncidentManagementRoutingModule } from './incident-management-routing.module';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddIncidentsComponent,
    CloseIncidentsComponent,
    ImpactIncidentsComponent,
    IncidentAnalysisComponent,
    IncidentManagementComponent,
    IncidentsComponent
    
  ],
  imports: [
    CommonModule,
    IncidentManagementRoutingModule,
    MaterialModule,
    FormsModule
  ]
})

export class IncidentManagementModule { }
