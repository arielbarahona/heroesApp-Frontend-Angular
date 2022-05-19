import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ErroPageComponent } from './shared/erro-page/erro-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m=> m.HeroesModule)
  },
  {
    path: '404', component: ErroPageComponent
  },
  {
    path: '**', redirectTo: '404' //component: ErroPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
