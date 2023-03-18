import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
import { ValidatorService } from '../../../shared/validators/validator.service';
//import { emailPattern, nombreApellidoPattern, nopPuedeSerStrider } from '../../../shared/validators/validaciones';

export interface ErrorMessage {
  error: string;
  message: string;
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidatorService: EmailValidatorService 
  ){}

  EMAIL_ERRORS: ErrorMessage[] = [
    { error: 'required', message: 'El email es obligatorio' },
    { error: 'pattern', message: 'El valor ingresado no tiene formato de email' },
    { error: 'emailAlreadyExists', message: 'El email ya está registrado' }
  ];

  get emailErrorMsg(): string {
    
    const errorEmailForm = this.miFormularioVal.get('email')?.errors;
    return this.EMAIL_ERRORS.filter((obj: ErrorMessage) => 
            obj.error === Object.keys(errorEmailForm!)[0])[0].message;
  
    
    /* 
    if (this.miFormularioVal.get('email')?.errors?.['required']){
      return 'El correo es obligatorio';
    } else if (this.miFormularioVal.get('email')?.errors?.['pattern']) {
      return 'El valor no tiene formato de email válido';
    } else if (this.miFormularioVal.get('email')?.errors?.['emailAlreadyExists']) {
      return 'El email ya existe';
    } 

    return ''
    */
  }
  
  ngOnInit(): void {
    this.miFormularioVal.reset({
      nombre: 'Cachorrus infamous',
      email: 'cachorrus@infamous.me',
      username: 'cachorrus.infamous'
    });
  }
  
  miFormularioVal: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService.emailExist()]],
    username: ['', [Validators.required, this.validatorService.nopPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password','confirmPassword')]
  });

  campoNoValido(campo: string) {
    return this.miFormularioVal.get(campo)?.errors &&
            this.miFormularioVal.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormularioVal.value);
    this.miFormularioVal.markAllAsTouched();
  }

}
