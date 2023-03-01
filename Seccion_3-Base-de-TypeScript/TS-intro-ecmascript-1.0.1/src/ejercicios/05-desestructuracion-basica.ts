/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: 'Ed Sheeron',
        anio: 2015
    }
}

/*
    1->Desestructuracion de objetos
        -no importa el orden de la desestructuracion
*/

const  { volumen, segundo, cancion, detalles } = reproductor;
//const  { volumen, segundo, cancion, detalles: { autor } } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es: ', volumen);
// console.log('El segundo actual es: ', segundo);
// console.log('El cancion actual es: ', cancion);
// console.log('El autor actual es: ', autor);

/*
    2->Desestructuracion de arreglos
        -importa la posicion/orden del item en el arreglo
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//Formas de desestructurar un array
//const [ p1, p2, p3] = dbz;
//const [ , , p3] = dbz;

//Desestructuración de una array como si fuera un objeto (por la posicion).
const { 2: p3 } = dbz; 

//console.log('Personaje 1: ', dbz[0]);
//console.log('Personaje 1: ', p1);
//console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);