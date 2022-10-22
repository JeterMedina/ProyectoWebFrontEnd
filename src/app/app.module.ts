import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTES/NAVBAR/navbar/navbar.component';

import {AppRoutingModule} from '../assets/ROUTES/app.routes';
import { InicioComponent } from './COMPONENTES/PAGES/INICIO/inicio/inicio.component';
import { AboutComponent } from './COMPONENTES/PAGES/ABOUT/about/about.component'

import {HttpClientModule} from '@angular/common/http';

import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
