import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/users/users.component';
import { MalwareComponent } from './pages/malware/malware.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { AddToolsComponent } from './pages/tools/add-tools/add-tools.component';
import { AddMalwareComponent } from './pages/malware/add-malware/add-malware.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    MalwareComponent,
    ToolsComponent,
    AddUserComponent,
    AddToolsComponent,
    AddMalwareComponent,
    PruebaComponent,
    PruebasComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule
    
  ]
})
export class AdminModule { }
