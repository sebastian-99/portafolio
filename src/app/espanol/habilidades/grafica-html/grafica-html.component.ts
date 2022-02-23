import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-html',
  templateUrl: './grafica-html.component.html',
  styleUrls: ['./grafica-html.component.css']
})
export class GraficaHtmlComponent{

  constructor() { }

  

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins:{
      legend:{
        display: false,
        labels:{
          font:{
            size: 20
          },
          
        }
        
      }
    }
  };

  
  public doughnutChartData: ChartData<'doughnut'> = {
   
    labels:["Experiencia", "Inexperiencia"],
    datasets: [
      {
        data: [80,20],
        
        backgroundColor: [
          'rgb(204, 102, 0)', //naranja
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(186, 118, 23)', //naranja
          'rgb(255, 255, 255)'
        ],
        hoverBorderColor:[
          'rgb(255,255,255)',
          'rgb(0,0,0)',
        ]
        
       },
    ]
  };

}
