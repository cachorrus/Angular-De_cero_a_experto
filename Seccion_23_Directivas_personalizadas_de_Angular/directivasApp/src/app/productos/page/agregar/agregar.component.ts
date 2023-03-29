import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {  
  mensaje: string = 'Cachorrus';
  color: string = 'red'

  miFormularioAgregar: FormGroup = this.fb.group ({
    nombre: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string) : boolean {
    return this.miFormularioAgregar.get(campo)?.invalid || false;
  }

  cambiarMensaje() {
    this.mensaje = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
