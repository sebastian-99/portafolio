import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-mysql',
  templateUrl: './grafica-mysql.component.html',
  styleUrls: ['./grafica-mysql.component.css']
})
export class GraficaMysqlComponent{

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
          'rgb(215, 164, 60)', //naranjoso
          'rgb(255, 255, 255)', //blanco
        ],
        hoverOffset: 2,
        hoverBackgroundColor:[
          'rgb(217, 174, 89)', //narajonso
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
