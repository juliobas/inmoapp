import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { HomeComponent } from './views/home/home.component';

import { EmpresaComponentsModule } from './components/empresa-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    EmpresaComponentsModule
  ]
})
export class EmpresaModule { }
