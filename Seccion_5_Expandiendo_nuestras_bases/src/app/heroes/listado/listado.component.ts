import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Catwoman','Goku','Hulk'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    //this.heroes = this.heroes.slice(0,this.heroes.length-1);
    this.heroeBorrado = this.heroes.shift() || '';    
  }

}
