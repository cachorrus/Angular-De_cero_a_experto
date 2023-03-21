import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {

    const url: string = `${this._baseUrl}/region/${region}?fields=cca3,name`;
    return this.http.get<PaisSmall[]>(url);

  }

  getPaisesPorCode(code: string): Observable<Pais[] | null> {

    if(!code) {
      return of(null)
    }

    const url: string = `${this._baseUrl}/alpha/${code}`;        
    return this.http.get<Pais[]>(url);

  }

  getPaisesPorCodeSmall(code: string): Observable<PaisSmall> {

    const url: string = `${this._baseUrl}/alpha/${code}?fields=name,cca3`;    
    return this.http.get<PaisSmall>(url);

  }  

  getPaisesPorCodes(codes: string[]): Observable<PaisSmall[]>{  
    
    if(codes.length === 0) {
      return of([])
    } 
    
    //1.- Alternativa: Concatenar las peticiones con Observables y combineLatest
    const peticiones: Observable<PaisSmall>[] = [];

    //Crear un array de peticiones
    codes.forEach( code => {
      const peticion = this.getPaisesPorCodeSmall(code);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);

    //2.- La API restcountries.com permite enviar una cadena de codigos de pais
    /* 
    const borderCodes = codes.join(',');
    return this.http.get<PaisSmall[]>
              (`${this._baseUrl}/alpha/?codes=${borderCodes}&fields=cca3,name`);
    */
  }
}
