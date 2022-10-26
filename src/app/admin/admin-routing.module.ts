import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { MalwareComponent } from './pages/malware/malware.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { AddToolsComponent } from './pages/tools/add-tools/add-tools.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'usuarios', component: UsersComponent },
      { path: 'usuarios/agregar', component: AddUserComponent },
      { path: 'usuarios/editar/:id', component: AddUserComponent },

      { path: 'herramientas', component: ToolsComponent },
      { path: 'herramientas/agregar', component: AddToolsComponent },
      { path: 'herramientas/editar/:id', component: AddToolsComponent },

      
      { path: 'malware', component: MalwareComponent },
      { path: 'malware/agregar', component: AddToolsComponent },
      { path: 'malware/editar/:id', component: AddToolsComponent },
     //  { path: '**', redirectTo: 'adminstrador' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
