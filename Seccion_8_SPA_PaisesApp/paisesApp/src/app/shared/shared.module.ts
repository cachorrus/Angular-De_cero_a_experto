import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule, 
    //Para habilitar el router en el sidebar
    RouterModule
    /* tambien es posible que el router funcione con 
      AppRoutingModule ya que este tiene importado el RouterModule
    */
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
