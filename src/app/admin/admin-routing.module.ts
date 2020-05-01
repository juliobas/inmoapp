import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'empresa',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/empresa/empresa.module').then(m => m.EmpresaModule)
      },
    ]
  },
  {
    path: 'oficinas',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/oficina/oficina.module').then(m => m.OficinaModule)
      },
    ]
  },
  {
    path: 'asesores',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/asesor/asesor.module').then(m => m.AsesorModule)
      },
    ]
  },
  {
    path: 'inmuebles',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/inmueble/inmueble.module').then(m => m.InmuebleModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
