import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InmuebleRoutingModule
  ]
})
export class InmuebleModule { }
