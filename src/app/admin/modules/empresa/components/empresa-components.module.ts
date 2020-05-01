import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../../primeng.module';
import { ModalEmpresaFormComponent } from './modal-empresa-form/modal-empresa-form.component';



@NgModule({
  declarations: [ModalEmpresaFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    ModalEmpresaFormComponent
  ]
})
export class EmpresaComponentsModule { }
