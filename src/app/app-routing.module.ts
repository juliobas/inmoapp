import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Components
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'; 
import { P404Component } from './views/error/p404/p404.component';
import { P500Component } from './views/error/p500/p500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
  {
    path: '404',
    component: P404Component,
  },
  {
    path: '500',
    component: P500Component,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
