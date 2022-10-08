import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import {InicioComponent} from '../../app/COMPONENTES/PAGES/INICIO/inicio/inicio.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'Inicio',component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,relativeLinkResolution: 'legacy'}),],
  exports:[RouterModule]
})
export class AppRoutingModule { }