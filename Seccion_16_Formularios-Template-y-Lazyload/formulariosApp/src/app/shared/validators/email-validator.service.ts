import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, first, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http:HttpClient) { }

  /*   
    Al implementar la interfaz AsyncValidator no es necesario llamarlo 
    con el nombre del metodo validate o validate().
    ejemplo desde otra clase: 
      
      contructor(private emailValidatorService: EmailValidatorService     

      miFormularioVal: FormGroup = this.fb.group({    
        email: ['', [], [this.emailValidatorService]],
      
  */
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    
    const email = control.value;
    console.log(email); 

    return this.http.get<any[]>(`http://localhost:3000/usuarios/?q=${email}`)
                    .pipe(
                      //debounce(i => interval(3000) ),
                      delay(3000), //simular que tarda en responer
                      map(resp => {
                        return (resp.length === 0) 
                              ? null
                              : {emailAlreadyExists: true}
                      })
                    ); 
  }

  /* 
    Tambien podemos hacer uso de un metodo que retornen el tipo AsyncValidatorFn
    de esta forma podremos llamarlo con el nombre() y podemos tener varias funciones
    en la misma clase .
    
    ejemplo desde otra clase: this.emailValidatorService.emailExist()
    
    https://stackoverflow.com/a/72529437
  */
  emailExist (): AsyncValidatorFn  {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {    
      return  control.value
        ? of(control.value).pipe(
            delay(1000),
            distinctUntilChanged(),
            switchMap(() => this.http.get<any[]>(`http://localhost:3000/usuarios/?q=${control.value}`)),
            map(resp => {
              return (resp.length === 0) 
                    ? null
                    : {emailAlreadyExists: true}
            })
          )
        : of();  
        
         /*  const email = control.value;
      console.log(email);
      return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  delay(3000),
                  map( resp => {
                    return ( resp.length === 0 ) 
                        ? null
                        : { emailAlreadyExists: true }
                  })
                ); */
    };
  }

  //existo otra forma de crear validadores asincronos como en 
  //la clase src/app/auth/validators/nombreApellidoPatternAsync.validator.ts
  //donde deberia pasarse como parametro el servicio http
  //https://www.c-sharpcorner.com/article/async-validation-in-angular/
}
