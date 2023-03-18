import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";

export function nombreApellidoPatternAsync(pattern: RegExp): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      const valid = pattern.test(control.value);
      return valid ? of(null) : of({ 'pattern': true });
    };
}