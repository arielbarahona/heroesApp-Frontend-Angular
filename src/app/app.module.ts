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

@NgModule({
  declarations: [
    AppComponent,
    ErroPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
