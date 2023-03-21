import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { selectorPageComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: selectorPageComponent },
      { path: '**', redirectTo: 'selector'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
