import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//https://github.com/angular/angular/blob/main/aio/content/examples/form-validation/src/app/shared/forbidden-name.directive.ts

// #docregion custom-validator

export function trimValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toString().trim() ?? '';

    if (value.length === 0) {
      return { required: true };
    }

    return null;
  };
}

// #enddocregion custom-validator

/* custom validators to template-driven forms
// #docregion directive

@Directive({
  selector: '[appTrimValidator]'
})
export class TrimValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value?.toString().trim();

    if (value.length === 0) {
      return { required: true };
    }

    return null;
  }
}

// #enddocregion directive
*/

