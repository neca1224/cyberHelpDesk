import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FieldsetModule } from 'primeng/fieldset';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FieldsetModule,
    ChipsModule
    
  ]
})
export class AuthModule { }
