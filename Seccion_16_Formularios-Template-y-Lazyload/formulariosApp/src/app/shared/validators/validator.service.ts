import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  nopPuedeSerStrider(control: FormControl): ValidationErrors | null 
  {
    const valor = control.value?.trim().toLowerCase();

    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }

    return null;
    
  }

  camposIguales(campo1: string, campo2:string) {
    return(formGroup: AbstractControl): ValidationErrors | null => {
      
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noSonIguales: true})
        return {          
          noSonIguales: true
        }
      }

      /* 
        Elimina todos los errores del control pass2, nos sirve para
        quitar el error cuando pass1 es corregido despues de pass2,
        ⚠️ sin embargo, esto tambien eliminaria otras validaciones
        formGroup.get(campo2)?.setErrors(null)
      */
      
      //solo eliminar el error noSonIguales
      if( formGroup.get(campo2)?.hasError('noSonIguales') ) {
        delete formGroup.get(campo2)?.errors?.["noSonIguales"];
        formGroup.get(campo2)?.updateValueAndValidity();
      }

      //✔️ pass1 === pass2 entonces no hay errores
      return null
    }
  }

}
