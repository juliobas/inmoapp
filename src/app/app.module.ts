import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng.module';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


//servicios
import { ServiciosFireService } from './backend/servicios-fire.service';
import { UserService } from './backend/users/user.service';
import { FormValidationService } from './services/form-validation.service';
import { AuthUserService } from './services/auth/auth-user.service';


// Import Components viwes
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeNavbarComponent } from './navbar/home-navbar/home-navbar.component';
import { AdminNavbarComponent } from './navbar/admin-navbar/admin-navbar.component';
import { P404Component } from './views/error/p404/p404.component';
import { P500Component } from './views/error/p500/p500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Import Components
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    //Views
    HomeLayoutComponent,
    AdminLayoutComponent, 
    HomeNavbarComponent,
    AdminNavbarComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,    
    //Componentes
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    ServiciosFireService,
    FormValidationService,
    UserService,
    AuthUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
