import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

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

    if(this.termino === ""){return;}

    /* 
      https://rxjs.dev/deprecations/subscribe-arguments
      forma recomendada de usar subscribe (con nombres de funciones)
    */
    this.paisService.buscarPais(this.termino)
        .subscribe({
          next: (paises) => {
            // console.log(paises);
            this.paises = paises;
          },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
          }
        }); 

    /* =====DECPRECATED====    
    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        this.hayError = true;
      }); 
    */      
  }

  sugerencia(termino:string){
    this.hayError = false;
    this.termino = termino;    
    this.termino === ""
                ? this.mostrarSugerencias = false
                : this.mostrarSugerencias = true
    
    if(!this.mostrarSugerencias) {return;}

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugerido = paises.splice(0,5);
        },
        error: (err) => {
          this.paisesSugerido = [];
        }
      });
  }

  buscarSugerido(termino:string) {
    this.buscar(termino);
  }
}
