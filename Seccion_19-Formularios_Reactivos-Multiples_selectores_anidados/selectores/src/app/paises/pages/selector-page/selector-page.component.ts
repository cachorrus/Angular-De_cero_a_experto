import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs/operators';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pages',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class selectorPageComponent {
  
  //llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  //fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor(private fb:FormBuilder,
              private paisesServices:PaisesService
  ){}

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    this.continenteChange()
    this.paisChange()
  }

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]],
  })

  private continenteChange() {
    this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( ( _ ) => {
              this.miFormulario.get('pais')?.reset('');
              this.cargando = true;
          }),
          switchMap( region => this.paisesServices.getPaisesPorRegion(region))
        )
        .subscribe(paises => {
          this.paises=paises.sort( (a,b) => {
            if (a.name.common > b.name.common)
              return 1;
            if (a.name.common < b.name.common)
              return -1;
            return 0;
          });
          
          this.cargando = false;
        });        
  }

  private paisChange() {
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.miFormulario.get('frontera')?.reset('');
            this.fronteras = [];
            this.cargando = true;
          }),
          filter( valor => valor !== ''),
          switchMap( code => this.paisesServices.getPaisesPorCode(code)),
          switchMap( pais => this.paisesServices.getPaisesPorCodes(pais ? pais[0]?.borders || [] : []))
        )
        .subscribe(paises => {          
          this.fronteras = paises;
          this.isFronteraRequerida()
         
          this.cargando = false;
        });     
  }

  //Valida si existen fronteras
  //Si el pais tiene fronteras aplica el Validators.required
  //de lo contrario quita la validacion
  isFronteraRequerida() {

    if (this.fronteras.length > 0){
      this.miFormulario.get('frontera')?.setValidators(Validators.required);      
    }else {
      this.miFormulario.get('frontera')?.setValidators(null);
    }    

    this.miFormulario.get('frontera')?.updateValueAndValidity();
    
    //console.log(this.miFormulario.get('frontera')?.status);     
  }

  guardar(){
    console.log(this.miFormulario.value);    
  }

}
