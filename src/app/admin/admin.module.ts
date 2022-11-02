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
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    MalwareComponent,
    ToolsComponent,
    AddUserComponent,
    AddToolsComponent,
    AddMalwareComponent    
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    TableModule,
    SliderModule,
    FormsModule,
    ProgressBarModule
  ]
})
export class AdminModule { }
