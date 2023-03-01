/*
    ===== Código de TypeScript =====
*/

//https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();
console.log (miClase.miPropiedad);

