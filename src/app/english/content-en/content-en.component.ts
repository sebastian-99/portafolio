import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-en',
  templateUrl: './content-en.component.html',
  styleUrls: ['./content-en.component.css']
})
export class ContentEnComponent implements OnInit {

  constructor(public routes:Router) { }

  ngOnInit(): void {
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
