import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from "primeng/contextmenu";
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from "primeng/sidebar";
import { TieredMenuModule } from "primeng/tieredmenu";

import { HeaderComponent } from './header.component';
import { TreeModule } from "primeng/tree";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    SidebarModule,
    TieredMenuModule,
    TabViewModule,
    ContextMenuModule,
    TreeModule,
    ToastModule
  ]
})
export class HeaderModule {
}
