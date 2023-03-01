import { Component } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'Hola Mundo',
    poder: 345
  };
    
  constructor() {}

}
