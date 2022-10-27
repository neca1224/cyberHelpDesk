import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidentesRoutingModule } from './gestion-incidentes-routing.module';
import { IncidentesComponent } from './pages/incidentes/incidentes.component';
import { AddIncidentesComponent } from './pages/incidentes/add-incidentes/add-incidentes.component';
import { AnalisisIncidentesComponent } from './pages/analisis-incidentes/analisis-incidentes.component';
import { ImpactoIncidenteComponent } from './pages/impacto-incidente/impacto-incidente.component';
import { CerrarIncidenteComponent } from './pages/cerrar-incidente/cerrar-incidente.component';
import { GestionIncidentesComponent } from './pages/gestion-incidentes/gestion-incidentes.component';



@NgModule({
  declarations: [
    IncidentesComponent,
    AddIncidentesComponent,
    AnalisisIncidentesComponent,
    ImpactoIncidenteComponent,
    CerrarIncidenteComponent,
    GestionIncidentesComponent
  ],
  imports: [
    CommonModule,
    GestionIncidentesRoutingModule
  ]
})
export class GestionIncidentesModule { }
