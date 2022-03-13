import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-git',
  templateUrl: './grafica-git.component.html',
  styleUrls: ['./grafica-git.component.css']
})
export class GraficaGitComponent{

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
        data: [63,37],
        
        backgroundColor: [
          'rgb(214, 113, 46)', //durazno
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(211, 120, 60)', //durazno
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
