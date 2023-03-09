import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isMayusculas: boolean = false;

  ordenarPor: keyof Heroe = "nombre";

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.roja
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ];
  
  stateOptions: any[] = [
    { label: 'Off', value: false },
    { label: 'On', value: true },
  ];

  toogleMayuscula(){
    this.isMayusculas = !this.isMayusculas;
  }

  cambiarOrden(valor: keyof Heroe) { 
    console.log('cambiarOrden')  
    this.ordenarPor = valor;        
  }

}
