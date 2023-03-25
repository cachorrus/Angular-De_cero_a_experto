import { Component } from '@angular/core';

interface MenuItem {
  ruta: string,
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  templateMenu: MenuItem[] = [
    {
      nombre: 'Fullscreen',
      ruta: './mapas/fullscreen'
    },
    {
      nombre: 'Zoom-Range',
      ruta: './mapas/zoom-range'
    },
    {
      nombre: 'Marcadores',
      ruta: './mapas/marcadores'
    },
    {
      nombre: 'Propiedades',
      ruta: './mapas/propiedades'
    }
  ];




}
