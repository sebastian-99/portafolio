import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-html',
  templateUrl: './grafica-html.component.html',
  styleUrls: ['./grafica-html.component.css']
})
export class GraficaHtmlComponent implements OnInit{


  href:string = this.router.url

  ngOnInit(): void{
    
    
  }
  
  constructor(public router:Router) {
  
  }

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
