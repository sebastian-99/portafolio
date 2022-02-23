import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-laravel',
  templateUrl: './grafica-laravel.component.html',
  styleUrls: ['./grafica-laravel.component.css']
})
export class GraficaLaravelComponent{

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
          'rgb(204, 0, 0)', //rojo
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(231, 24, 24)', //rojo
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
