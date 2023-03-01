import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interface";

@Injectable()
export class DbzService {    
    
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];
    
    get personajes(): Personaje[] {
        /* 
            https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            https://keepcoding.io/blog/pasar-variable-por-valor-referencia-javascript/

            Buenas Practicas (Javascript manda los objectos por referencia)
            Pasamos la variable por valor y no por referencia para
            evitar que pueda ser alterada desde otros lugares
        */        
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje) {
        this._personajes.push(personaje);
    }
}
    