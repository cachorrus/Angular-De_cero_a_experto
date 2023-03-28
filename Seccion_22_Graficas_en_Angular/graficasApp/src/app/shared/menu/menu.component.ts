import { Component } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { ruta: '/grafica/barra', texto: 'Barras' },
    { ruta: '/grafica/barrara-doble', texto: 'Barras Dobles' },
    { ruta: '/grafica/dona', texto: 'Dona' },
    { ruta: '/grafica/dona-http', texto: 'Dona Http'}
  ]
}
