/*
    ===== Código de TypeScript =====
*/

//https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript

/*=========================================
        1-> Clases básica
===========================================
 class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;

    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

const ironman = new Heroe();
console.log( ironman ); 
==============================================
*/

/* ===========================================
        2-> Constructor de una clase
===============================================
class Heroe {
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {}
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log( ironman ); 
===============================================
*/

/*  =================================================
        3- Extender una clase    
    =================================================
*/
class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log( ironman );

