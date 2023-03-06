import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  //puede ser nulo !
  paises!: Country[];

  /*
    ActivatedRoute: Proporciona acceso a información sobre 
    una ruta asociada a un componente cargado en una salida.
    Se utiliza para recorrer el árbol RouterState y 
    extraer información de los nodos.
  */
  constructor(
      private activateRoute: ActivatedRoute,
      private paisService: PaisService
      ) {}

  ngOnInit(): void {
    /* 
      ({codigoPais}): desectructurar los params (URL queryString)
      se refiere al parametro definido en las rutas 
      en este caso al path: 'pais/:codigoPais'.
      switchMap:https://medium.com/dottech/todo-sobre-switchmap-y-compa%C3%B1%C3%ADa-2af03cedc2be
      tap: Operador que dispara un efecto secundario.
    */
    this.activateRoute.params
      .pipe(
        switchMap( ({codigoPais}) => this.paisService.getPaisPorAlpha(codigoPais)),
        //tap(console.log) // es igal a resp => consola.log(resp) imprime el resultado de getPaisPorAlpha
      )
      .subscribe(paises => {
        this.paises = paises;
      })


    /*      
      this.activateRoute.params           
          .subscribe( ({codigoPais}) => {
            console.log(codigoPais);
            this.paisService.getPaisPorAlpha(codigoPais)
              .subscribe(pais => {
                console.log(pais);
              });
        }); 
    */
  }
}
