import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './cofirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Heroe
  ){}
  
  cerrar() {
    this.dialogRef.close();
  }

  borrar() {
    this.dialogRef.close(true);
  }

}
