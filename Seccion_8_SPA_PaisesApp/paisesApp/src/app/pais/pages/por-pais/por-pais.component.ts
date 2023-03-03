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

  constructor(private paisService:PaisService) {}

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    /* 
      https://rxjs.dev/deprecations/subscribe-arguments
      forma recomendada de usar subscribe (con nombres de funciones)
    */
    this.paisService.buscarPais(this.termino)
        .subscribe({
          next: (paises) => {
            console.log(paises);
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
    //TODO: crear sugerencias
  }
}
