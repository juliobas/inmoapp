import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
