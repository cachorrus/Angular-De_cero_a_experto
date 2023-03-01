import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = environment.apikey;
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {    
    return [...this._historial];
  }
  
  constructor(private http: HttpClient) {
    
    /* otra forma de obtener el localStorage
    if(localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    } 
    */
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query:string = '') {

    query = query.trim().toLocaleLowerCase();

    //Validair: si no existe lo incluye en el array
    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      //Solo guardar los ultimos 10 elementos
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp)=> {
        //console.log (resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }

}
