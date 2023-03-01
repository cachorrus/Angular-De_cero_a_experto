import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0) {
      return;
    }
    
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = "";
  }
}
