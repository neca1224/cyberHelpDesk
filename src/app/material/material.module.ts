import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {TieredMenuModule} from 'primeng/tieredmenu';

@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    TieredMenuModule
  ],
})
export class MaterialModule {}
