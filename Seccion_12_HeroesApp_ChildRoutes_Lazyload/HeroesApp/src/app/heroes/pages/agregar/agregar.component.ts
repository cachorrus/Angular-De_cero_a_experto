import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/cofirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      boder-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit{

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private heroesService: HeroesService){}
  
  ngOnInit(): void {    
    if(!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
    //({id}) => desestructuracion para obtener el parametro :id
    //.subscribe(({id}) => console.log(id))        
    .pipe(
      //Solo cuando estemos en editar tendremos un id válido
      filter(({id}) => id !== undefined), 
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe(hereo => this.heroe = hereo);

  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0)
      return;
    

    if(this.heroe.id) {
      //Actualizar
      this.heroesService.updateHeroe(this.heroe)
        .subscribe(respHeroe => {
          this.heroe = respHeroe;
          this.openSnackBar('Registro actualizado');
        });
    }else {
      //Crear
      this.heroesService.createHeroe(this.heroe)
        .subscribe(respHeroe => {
          this.router.navigate(['/heroes/editar',respHeroe.id]);
          this.openSnackBar('Registro creado');
        });
    }      
  }

  borrarHeroe() {
   const dialog = this._dialog.open(ConfirmarComponent, {
      width: '250px',
      data: {...this.heroe}
    });


    dialog.afterClosed()
      .pipe(
        filter(res => res),
        switchMap(() => this.heroesService.deleteHeroe(this.heroe.id!))
      ).subscribe({
        next: () => {          
          this.router.navigate(['/heroes'])
          this.openSnackBar('Registro eliminado');
        }
      });

      /* 
      this.heroesService.deleteHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes']);
      });
       */
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok!', {
      duration: 2500
      // panelClass: ['blue-snackbar','mat-accent']
    });
  }
}
