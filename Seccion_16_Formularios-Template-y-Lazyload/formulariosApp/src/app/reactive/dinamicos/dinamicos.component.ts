import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { trimValidator } from '../directives/trim-validator.directive';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) {}

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  //funcion con todas las validaciones para los inputs del formulario
  private validationInput(): ValidatorFn[]{
    return [Validators.required, trimValidator];
  }

  miFormulario: FormGroup = this.fb.group({
        nombre    : ['',[Validators.required, trimValidator, Validators.minLength(3)]],
        favoritos : this.fb.array([
            ['Metal Gear', this.validationInput],
            ['Death Stranding', this.validationInput]
            ], Validators.required) //por lo menos un elemento en el array 
        });

  nuevoFavorito: FormControl = this.fb.control('',this.validationInput);

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo]?.touched &&
           this.miFormulario.controls[campo]?.errors
  }

  campoFavoritoValido(){
    let errors:boolean = false;
    this.favoritosArr.controls?.forEach(item=>{
      if (item.touched && item.errors){
        errors = true;
      }
    });

    return errors;
  }

  guardar(){

    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);  
  }

  addFavorito() {
    if(this.nuevoFavorito.invalid) {
      return;
    }

    //agregar el control con FormControl
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, this.validationInput()));

    //agreguar el control con FormArray
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, this.validationInput));

    this.nuevoFavorito.reset();
  }

  deleteFavorito(i: number) {
    this.favoritosArr.removeAt(i);
  }

}
