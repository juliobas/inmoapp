import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OficinaRoutingModule } from './oficina-routing.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    OficinaRoutingModule
  ]
})
export class OficinaModule { }
