import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  @ViewChild('miFormularioSwitches') miFormularioSwitches!: NgForm;

  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYCondiciones = true;

  errores(control: string) {
    return this.miFormularioSwitches?.controls[control]?.errors;
  }

}
