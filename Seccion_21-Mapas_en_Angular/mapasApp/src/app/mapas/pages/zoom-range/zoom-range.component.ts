import { AfterViewInit, Component, ElementRef,  OnDestroy,  ViewChild } from '@angular/core';
import { Map, MapboxEvent } from 'mapbox-gl';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
   
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: Map;
  zoomLevel: number = 16;
  maxZoom: number = 18;
  minZoom: number = 2;
  center: [number,number] = [-104.83861372595378, 21.49031385363616];

  mapaListener: Subscription[] = [];

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

    /* Set an event listener that fires repeatedly during a zoom transition.
        https://github.com/mapbox/mapbox-gl-js/issues/5049
        https://github.com/mapbox/mapbox-gl-js/issues/10916

      1.- crear el listener con arroy function/anonimas segun la documentacion
        esta forma no funciona el evento off() porque son creadas funciones diferentes         
    */
    
    /* this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();            
    }); 
    
    this.mapa.on('move', (ev)=> {
      const target = ev.target;
      const {lng, lat} = target.getCenter();
      this.center = [lng, lat];
    }); */
    
    /* 2.- Crear el listener con funciones nombradas para limpiar posteriormente 
      en el evento ngOnDestroy 
    this.mapa.on('zoom', this.mapOnZoom);
    this.mapa.on('move', this.mapOnMove); 
    */

    /* 
      3.- Convirtiendo el listener en Observables con fromEvent de esta forma
      podemos llamar el subscribe y unsubscribe(ngOnDestroy) 
      alternativa: https://github.com/ngneat/until-destroy
     */
    const zoom$ = fromEvent(this.mapa,'zoom')
                  .pipe(
                    debounceTime(300))
                  .subscribe(()=>{
                      this.zoomLevel = this.mapa.getZoom();
                  }); 

    const move$ = fromEvent(this.mapa,'move')
                  .pipe(
                    debounceTime(300))
                  .subscribe((ev:MapboxEvent)=>{
                    const target = ev.target;
                    const {lng, lat} = target.getCenter();
                    this.center = [lng, lat];
                  }); 

    this.mapaListener.push(zoom$);
    this.mapaListener.push(move$);    

    this.mapaListener.forEach(sub => console.log('ngAfterViewInit:',sub));
  

   /*  //limitar el zoom a 18
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    }); */
  }  
  
  mapOnZoom(ev:MapboxEvent) {
    //this.zoomLevel = this.mapa.getZoom(); 
    this.zoomLevel = ev.target.getZoom();
  }

  disableClick() {
    // remove click event listener from map
    this.mapa.off('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();            
    }); 
  }

  mapOnMove(ev:MapboxEvent) {
    const target = ev.target;
    const {lng, lat} = target.getCenter();
    this.center = [lng, lat];
  }

  //limpiar todos los listeners creados
  ngOnDestroy(): void {
    /* no es ejecutada con arrow function o funciones anonimas
      debe ser ejecutada con los mismo parametros con los que fue creada
      1.- Destruir el listener  con arroy function
    */
    /* this.mapa.off('zoom',(ev) => {
      console.log('zoom: ngOnDestroy');
    }); 
    this.mapa.off('move',(ev) => {
      console.log('move: ngOnDestroy');
    }); */
    
    /* 2.- Destruir el listenr con funciones nombradas
    this.mapa.off('zoom', this.mapOnZoom);
    this.mapa.off('move', this.mapOnMove); */

    /* Usar unsubscribe para liberar los recursos
     */
    this.mapaListener.forEach(sub => {
      sub.unsubscribe()
      console.log('ngOnDestroy:after: ', sub)
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  changedZoom(value: string) {
    this.mapa.zoomTo(Number(value));
  }

}
