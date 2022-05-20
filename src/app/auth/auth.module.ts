//Librerias de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages Componentes
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutngModule } from './auth-routng.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutngModule,
    MaterialModule
  ]
})
export class AuthModule { }
