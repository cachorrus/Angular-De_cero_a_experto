import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private route: Router
  ) {}

  ngOnInit() {

      //Buenas practicas switchMap: https://medium.com/dottech/rxjs-buenas-pr%C3%A1cticas-95d489aeb9d5
      //evitar usar subcribe anidados
      this.activatedRoute
      .params.pipe(
        switchMap(({id}) => this.heroesService.getHeroePorId(id))
      ).subscribe(heroe => this.heroe = heroe);

  }

  regresar(){
    this.route.navigate(['/heroes/listado']);
  }
}
