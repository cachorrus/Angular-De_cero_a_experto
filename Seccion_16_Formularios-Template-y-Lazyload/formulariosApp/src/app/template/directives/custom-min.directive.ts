import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor() {}
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const inputValido = control.value;

        return(inputValido < this.minimo)
                ? {'customMin': true}
                : null;
        
    }
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }

}