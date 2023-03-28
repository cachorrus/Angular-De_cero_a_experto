import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{
  @Input() horizontal: boolean = false;
  //@Input() inputLabels: string[] = [];
  //@Input() inputChartDataset: ChartDataset<any,any>[] = [];
  @Input() inputBarCharData: ChartData<'bar'> = {
                          labels: [],
                          datasets: []      
                        }; 

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

 /*  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []      
  }; */

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions = {        
          indexAxis: 'y'               
      } 
    }

    //inicializa el Char con la info de @Input
    /* this.barChartData = {
      datasets: this.inputChartDataset,
      labels: this.inputLabels
    } */
    //this.barChartData = this.inputBarCharData
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
