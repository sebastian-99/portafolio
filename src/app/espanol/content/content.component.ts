import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

  constructor(public routes: Router){

  }

  encuestaCovid(){
   
    this.routes.navigate(['es/retorno-seguro']).then(nav =>{
      console.log("entro la wea");
    },err =>{
      console.log(err);
    });
  }

  correspondencia(){

    this.routes.navigate(['es/correspondencia-utvt']);

  }

  tusismo(){

    this.routes.navigate(['es/turismo-lerma']);

  }


}
