import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Cachorrus',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'DeathStranding'}
    ]
  };
  
  guardar(){
    console.log('formulario posteado');    
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){

    if(this.nuevoJuego.trim().length === 0){
      return
    }

    const nuevoFavorito:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego.trim()
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

}
