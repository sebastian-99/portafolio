import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-css',
  templateUrl: './grafica-css.component.html',
  styleUrls: ['./grafica-css.component.css']
})
export class GraficaCssComponent{

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
        data: [65,35],
        
        backgroundColor: [
          'rgb(51, 51, 255)', //azul
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(64, 64, 226)', //azul
          'rgb(255, 255, 255)'
        ],
        hoverBorderColor:[
          'rgb(255,255,255)',
          'rgb(0,0,0)',
        ],
       },
    ]
  };

}
