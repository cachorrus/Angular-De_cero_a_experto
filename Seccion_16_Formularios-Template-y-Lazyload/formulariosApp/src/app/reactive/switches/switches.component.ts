import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.miFormularioSwitches.reset({
          ...this.persona,
          condiciones:false //inicializar para que no establezca null
        });

    // Para actualizar el objeto Persona
    // subscribirnos a todos los cambios del formulario 
    // pero con diferente referencia operador spread (inmutable)
    this.miFormularioSwitches.valueChanges.subscribe(({condiciones, ...restForm}) => {
      this.persona = restForm;
    });
    
    /* 
      //para subscribirnos a todos los cambios del formulario
      //de esta forma el objeto persona es igual al formulario (misma referencia)
      this.miFormularioSwitches.valueChanges.subscribe(form => {
        //para eliminar el campo condiciones pero tambien se eliminan del formulario
        delete form.condiciones; 
        this.persona = form;
      });
    
    
      //para subscribirnos a un campo del formulario
      this.miFormularioSwitches.get('condiciones')?.valueChanges.subscribe(cond => {
        console.log(cond);
      }); 
    */
  }

  miFormularioSwitches: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  guardar(){
    const formValue = {...this.miFormularioSwitches.value};
    delete formValue.condiciones; //para eliminar el campo condiciones

    this.persona = formValue;

    console.log(formValue);
    
  }

}
