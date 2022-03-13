import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-grafica-jquery',
  templateUrl: './grafica-jquery.component.html',
  styleUrls: ['./grafica-jquery.component.css']
})
export class GraficaJqueryComponent{

  href:string = this.router.url
  constructor(public router:Router) { }

  simon():string[]{

    let palabra:string[];

    if(this.href == "/es/portafolio"){

      palabra= ['Experiencia' , 'Inexperiencia']

    }else{
    
      palabra= ['Experience' , 'Inexperience']
    }

    return palabra;
  }

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
   
    labels:this.simon(),
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
