import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAutenticated } from './auth/guards/auth.functions.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
                        .then(m => m.AuthModule)   
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module')
                        .then(m => m.HeroesModule),
    //canMatch: [AuthGuard]
    canMatch: [isAutenticated]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
