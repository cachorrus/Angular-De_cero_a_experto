import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
  pure: true //default true
})
export class OrdenarPipe implements PipeTransform {
  
  transform(heroes: Heroe[], field: keyof Heroe): Heroe[] {    
    return [...heroes].sort((heroe1,heroe2) => (heroe1[field] > heroe2[field] ? 1 : -1));
  }
  
  /* 
  transform(heroes: Heroe[], ordenarPor: string =  'sin valor'): Heroe[] {      
    //Forma 2
    switch(ordenarPor) {
      case 'nombre':
        return heroes.sort((a,b)=> (a.nombre > b.nombre) ? 1: -1);
      
      case 'vuela':
        return heroes.sort((a,b)=> (a.vuela > b.vuela) ? -1: 1);
      
      case 'color':
        return heroes.sort((a,b)=> (a.color > b.color) ? 1: -1);
      
      default:
        return heroes
    }

    //Forma 1
    if( ordenarPor === 'sin valor'){
      return heroes;
    }else{
      heroes = heroes.sort((a,b)=> (a.nombre > b.nombre) ? 1: -1);
    }
    
    return heroes;
    
  }

  */
}
