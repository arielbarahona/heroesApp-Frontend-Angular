//Librerias de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages Componentes
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutngModule } from './auth-routng.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutngModule
  ]
})
export class AuthModule { }
