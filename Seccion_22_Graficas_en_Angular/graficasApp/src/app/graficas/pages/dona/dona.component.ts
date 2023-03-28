import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
 // Doughnut
 public colors: Color[] = ['#36868F','#DB7FB1','#69D0DB','#DBCB53','#8F853D'];
 public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     { data: [ 350, 450, 100 ] , backgroundColor: this.colors},
   ]
 };
 public doughnutChartType: ChartType = 'doughnut';

 public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  responsive: true,
  maintainAspectRatio: false,
};
 

 // events
 public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }
}
