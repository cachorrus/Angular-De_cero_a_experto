import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, Marker, LngLat } from 'mapbox-gl';
import { fromEvent, Subscription } from 'rxjs';

interface MarcadorColor {
  color: string;
  colorText: string;
  marker?: Marker;
  centro?: LngLat
}

interface MarcadorIni {
  color: string;
  colorText: string;
  centro: LngLat;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
  ]
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy{
  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: Map;
  zoomLevel: number = 15;
  maxZoom: number = 18;
  minZoom: number = 2;
  center: [number,number] = [-104.83861372595378, 21.49031385363616];

  marcadores: MarcadorColor[] = [];

  marcadorListener: Subscription[] = [];

   //inicializar despues de que es creado el HTML
  ngAfterViewInit(): void {    
    this.mapa = new Map({      
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
    });

    this.leerLocalStorage();

    /* const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';

    new Marker( {
          element: markerHtml
        } )
        .setLngLat(this.center)
        .addTo(this.mapa); 
    */
  }

  ngOnDestroy(): void {
    this.marcadorListener.forEach(m => m.unsubscribe());
  }

  irMarcador(marker: Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  agregarMarcador() {
    //genera un color aleatorio
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    //https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area/11868159#11868159
    const contrastColor = (c: string)=>["#000","#fff"][~~([.299,.587,.114].reduce((r,v,i)=>parseInt(c.substr(i*2+1,2),16)*v+r,0)<128)];

    const colorText = contrastColor(color);

    const param: MarcadorIni = {
      color,
      colorText,
      centro: this.mapa.getCenter()
    }

    this.crearMarcador(param);

    this.guardarMarcadoresLocalStorage();
  }

  crearMarcador(param: MarcadorIni) {
    const nuevoMarcador = new Marker({
      draggable: true,
      color: param.color
    })
    .setLngLat(param.centro)
    .addTo(this.mapa);

    this.marcadores.push({
      color: param.color,
      colorText: param.colorText,
      marker: nuevoMarcador
    });

    //crer un observable para el evento dragend
    const dragend$ = fromEvent(nuevoMarcador,'dragend')
          .subscribe(()=>{
            this.guardarMarcadoresLocalStorage()
          }); 

    this.marcadorListener.push(dragend$);
  }

  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach(m => {
      //const {lng, lat} = m.marker!.getLngLat();
      lngLatArr.push({
        color: m.color,
        colorText: m.colorText,
        centro: m.marker!.getLngLat()
      });            
    });

    localStorage.setItem('marcadores',JSON.stringify(lngLatArr));
  }

  leerLocalStorage() {
    if(!localStorage.getItem('marcadores')){
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach(m => {

      const param: MarcadorIni = {
        color: m.color,
        colorText: m.colorText,
        centro: m.centro!
      }
  
      this.crearMarcador(param);

    });
  }

  borrarMarcador(i: number) {
    //Borrar el marcador del mapa
    this.marcadores[i].marker?.remove();
    //Borrar el marcador del array
    this.marcadores.splice(i,1);
    //borrar/actualizar el marcador del localStorage
    this.guardarMarcadoresLocalStorage();
  }

}
