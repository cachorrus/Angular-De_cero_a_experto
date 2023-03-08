import { getLocaleId } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLowercase: string = 'cachorrus';
  nombreUppercase: string = 'CACHORRUS';
  nombreTitlecase: string = 'CachOrrUs InFaMous';

  fecha: Date = new Date(); //El día de hoy

  /* constructor(@Inject(LOCALE_ID) public locale: string){}

  get getLocaleId() {
    return getLocaleId(this.locale);
  } */
}
