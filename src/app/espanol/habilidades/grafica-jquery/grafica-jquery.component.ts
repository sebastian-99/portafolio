import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-grafica-jquery',
  templateUrl: './grafica-jquery.component.html',
  styleUrls: ['./grafica-jquery.component.css']
})
export class GraficaJqueryComponent{

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
          'rgb(0, 0, 255)', //azul
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(0, 0, 255)', //azul
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
