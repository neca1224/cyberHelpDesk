import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { FooterModule } from "./shared/footer/footer.module";
import { HeaderModule } from "./shared/header/header.module";
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FooterModule,
    HeaderModule,
    HttpClientModule,
    MaterialModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
