import { Component, OnInit } from '@angular/core';
//libreria de js por lo que se instala los types
//npm i --save-dev @types/mapbox-gl
//import * as mapboxgl from 'mapbox-gl'; 
import { Map } from 'mapbox-gl';
//import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
  ]
})
export class FullScreenComponent implements OnInit {
  
  //https://github.com/DefinitelyTyped/DefinitelyTyped/issues/23467
  ngOnInit(): void {
    //(mapboxgl as any).accessToken = environment.mapboxToken;
    const map = new Map({
      //accessToken: environment.mapboxToken, //inicializar en app.component.ts
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-104.83861372595378, 21.49031385363616], // starting position [lng, lat]
      zoom: 16, // starting zoom
    });
  }  

}
