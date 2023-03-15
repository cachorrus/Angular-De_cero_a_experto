import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    inputProducto: 'RTX 5090TI',
    inputPrecio: 10,
    inputExistencias: 10
  }
  
  guardar() {
    console.log(this.miFormulario.value);  
    
    //Limpiar el formulario e inicializar valores del formulario
    this.miFormulario.resetForm({   
      inputProducto: 'Algo',
      inputPrecio: 0,
      inputExistencias: 0
    });
  }

  productoValido(): boolean {
    return this.miFormulario?.controls['inputProducto']?.invalid &&
            this.miFormulario?.controls['inputProducto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['inputPrecio']?.touched && 
            this.miFormulario?.controls['inputPrecio']?.invalid &&
            this.miFormulario?.controls['inputPrecio']?.value < 0;
    
  }

}
