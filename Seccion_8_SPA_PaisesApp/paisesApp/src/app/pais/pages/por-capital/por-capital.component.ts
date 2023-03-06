import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string='';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugerido: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService:PaisService) {}

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;    
    this.mostrarSugerencias = false;

    this.paisService.buscarCapital(this.termino)
        .subscribe({
          next: (paises) => {
            this.paises = paises;
          },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
          }
        });     
  }

  sugerencia(termino:string){
    this.hayError = false;
    this.termino = termino;    
    this.termino === ""
                ? this.mostrarSugerencias = false
                : this.mostrarSugerencias = true
    
    if(!this.mostrarSugerencias) {return;}

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugerido = paises.splice(0,5);
          //console.log(this.paisesSugerido);
        },
        error: (err) => {
          this.paisesSugerido = [];
        }
      });
  }
}
