import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  termino: string = "";
  heroes: Heroe[]= [];
  heroeSeleccionado!: Heroe | undefined;
  
  constructor(private heroesServices: HeroesService) {}

  buscando() {
    this.heroesServices.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ) {
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return; 
    }
    
    const heroe: Heroe = event.option.value;
    
    this.termino = heroe.superhero;

    this.heroesServices.getHeroePorId(heroe.id!)
        .subscribe(heroe => this.heroeSeleccionado = heroe);
  }
}
