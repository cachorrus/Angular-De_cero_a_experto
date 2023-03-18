import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trimValidator } from '../directives/trim-validator.directive';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
/* 1.- Inicializar el formulario con new FormGroup 
  miFormulario: FormGroup = new FormGroup ({
    nombre      : new FormControl('RTX 4080Ti'),
    precio      : new FormControl(120),
    existencias : new FormControl(7)
  });
 */

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 5090Ti',
      precio: 23
    })
  }

  //2.- Inicializar el formulario con FormBuilder 
  /*
  You can define the control with just the initial value, 
  but if your controls need sync or async validation, 
  add sync and async validators as the second and third items 
  in the array.

  exp:  this.fb.group({
          firstName: ['initial value', 
                     [sync validation], 
                     [async validation]]
        });
  */
  miFormulario: FormGroup = this.fb.group({
    nombre      : [,
                    [
                      Validators.required, 
                      trimValidator,
                      Validators.minLength(3)
                    ]
                  ],
    precio      : [, 
                    [
                      Validators.required, 
                      Validators.min(0)
                    ]
                  ],
    existencias : [, [
                        Validators.required, 
                        Validators.min(0)
                      ]
                  ]
  });

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid) {
      //para mostrar los mensajes de validacion
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
