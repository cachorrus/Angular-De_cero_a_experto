import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const nopPuedeSerStrider = (control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();

    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }

    return null;
    
  }