import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'administrador',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)
  },

  {
    path:'autenticacion',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'gestion-incidentes',
    loadChildren: ()=> import('./incident-management/incident-management.module').then(m => m.IncidentManagementModule)
  },
  {
  path:'404',
  component: ErrorPageComponent
  },
  {
  path:'**',
  redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
