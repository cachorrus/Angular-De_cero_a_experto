import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker, LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
  ]
})
export class MiniMapaComponent implements AfterViewInit{
  @Input() lngLat: [number,number]= [0,0];
  @ViewChild('mapa') divMapa!: ElementRef;

  ngAfterViewInit(): void {
    const mapa = new Map({      
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(mapa);
  }

}
