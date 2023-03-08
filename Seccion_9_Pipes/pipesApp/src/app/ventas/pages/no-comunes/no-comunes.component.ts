import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  constructor(private messageService: MessageService) {}

  //i18nSelect
  nombre: string = 'Cachorrus';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  resetClientes: string[] = ['Maria','Paco','Perro','Gato','Angular15'];
  clientes: string[] = [...this.resetClientes];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  onCambiarNombre() {
    if (this.genero === 'masculino'){
      this.nombre = 'María';
      this.genero = 'femenino'
    }else {
      this.nombre = 'Cachorrus';
      this.genero = 'masculino'
    }    
  }

  onBorrarCliente() {    
    this.clientes.pop();        
  }

  onResetClientes() {
    this.clientes = [...this.resetClientes];
    
    //Toast: notificar al usuario
    this.messageService.add(
    {
      severity:'info', 
      summary:'Clientes inicializados', 
      detail:'Se han reseteado los clientes'
    });
  }

  //KeyValue Pipe
  Persona = {
    nombre: 'Cachorrus',
    edad: 55,
    direccion: 'Redmond, Washington, Estados Unidos'
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Asycn Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,....1000

  valorPromesa = new Promise<string>((resolve,reject)=> {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
