import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-javascript',
  templateUrl: './grafica-javascript.component.html',
  styleUrls: ['./grafica-javascript.component.css']
})
export class GraficaJavascriptComponent{

  
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
        data: [78,22],
        
        backgroundColor: [
          'rgb(255, 255, 102)', //amarillo
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(255, 255, 133)', //naranja
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
