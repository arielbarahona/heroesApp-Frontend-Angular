import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Ruteo
import { AppRoutingModule } from './app-routing.module';

//para usar los servicios - peticiones http
import { HttpClientModule } from "@angular/common/http";

//componente de error page
import { ErroPageComponent } from './shared/erro-page/erro-page.component';

//Paquete de alertas de terceros
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ErroPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
    timeOut: 5000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
