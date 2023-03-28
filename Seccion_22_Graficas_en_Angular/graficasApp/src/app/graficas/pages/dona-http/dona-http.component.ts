import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  constructor(public graficaService:GraficasService) {}  
  
   // Doughnut   
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
     /*  { data: [ 350, 450, 100 ]}, */
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    maintainAspectRatio: false,
  };
  
  ngOnInit(): void {
    this.graficaService.getUsuariosRedesSocialesDonaData()
          .subscribe((info) => {       
            this.doughnutChartData = info;            
          });  

    this.chart?.update();

    /* this.graficaService.getUsuariosRedesSociales()
      .subscribe(data => {
        const labels = Object.keys (data);
        const datos = Object.values (data);

        this.doughnutChartData = {
          labels: labels,
          datasets: [{data: datos}]
        }
        
      }); 
      
       datos.forEach((element, index) => {
              //this.doughnutChartData.datasets[index].data.push(element)
              console.log(`index: ${index}, element: ${element}`);
              
            });
      */
  }  

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
