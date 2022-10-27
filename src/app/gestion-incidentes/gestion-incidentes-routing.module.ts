import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentesComponent } from './pages/incidentes/incidentes.component';
import { GestionIncidentesComponent } from './pages/gestion-incidentes/gestion-incidentes.component';
import { AddIncidentesComponent } from './pages/incidentes/add-incidentes/add-incidentes.component';
import { AnalisisIncidentesComponent } from './pages/analisis-incidentes/analisis-incidentes.component';
import { ImpactoIncidenteComponent } from './pages/impacto-incidente/impacto-incidente.component';
import { CerrarIncidenteComponent } from './pages/cerrar-incidente/cerrar-incidente.component';

const routes: Routes = [
  {
    path: '',
    component: GestionIncidentesComponent,
    children:[
      { path: 'incidentes', component: IncidentesComponent },
      { path: 'incidentes/agregar', component: AddIncidentesComponent },
      { path: 'incidentes/editar/:id', component: AddIncidentesComponent },

      { path: 'analisis', component: AnalisisIncidentesComponent },
      { path: 'gestion', component: GestionIncidentesComponent },
      { path: 'impacto', component: ImpactoIncidenteComponent },

      
      { path: 'cerrar', component: CerrarIncidenteComponent },
      { path: '**', redirectTo: 'gestionIncidentes' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GestionIncidentesRoutingModule { }
