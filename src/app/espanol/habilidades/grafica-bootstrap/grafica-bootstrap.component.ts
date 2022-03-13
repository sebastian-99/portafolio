import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-bootstrap',
  templateUrl: './grafica-bootstrap.component.html',
  styleUrls: ['./grafica-bootstrap.component.css']
})
export class GraficaBootstrapComponent{

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
