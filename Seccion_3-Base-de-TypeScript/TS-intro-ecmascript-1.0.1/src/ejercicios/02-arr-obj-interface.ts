/*
    ===== Código de TypeScript =====
*/

//Array
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //Propiedad Opcional
};

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: habilidades //['Bash', 'Counter', 'Healing']
};

console.table(personaje);
