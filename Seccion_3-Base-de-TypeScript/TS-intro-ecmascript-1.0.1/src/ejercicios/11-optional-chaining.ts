/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Cachorrus'
}

const pasajero2: Pasajero = {
    nombre: 'Perro',
    hijos: ['Queso', 'Panela']
}

function imprimirHijos (pasajero: Pasajero):void {
    //Encadenamiento opcional
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log ( cuantosHijos );
}

imprimirHijos(pasajero1);
