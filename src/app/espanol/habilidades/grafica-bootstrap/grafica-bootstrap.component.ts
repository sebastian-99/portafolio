import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-bootstrap',
  templateUrl: './grafica-bootstrap.component.html',
  styleUrls: ['./grafica-bootstrap.component.css']
})
export class GraficaBootstrapComponent{

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
          'rgb(153, 0, 204)', //morado violeta
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(165, 22, 212)', //morado violeta
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
