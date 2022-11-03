import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminComponent } from './pages/admin/admin.component';
import { AddMalwareComponent } from './pages/malware/add-malware/add-malware.component';
import { AddToolsComponent } from './pages/tools/add-tools/add-tools.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { MalwareComponent } from './pages/malware/malware.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UsersComponent } from './pages/users/users.component';
@NgModule({
  declarations: [
    AdminComponent,
    AddMalwareComponent,
    AddToolsComponent,
    AddUserComponent,
    MalwareComponent,
    ToolsComponent,
    UsersComponent,
  ],
  imports: [AdminRoutingModule, CommonModule],
})
export class AdminModule {}
