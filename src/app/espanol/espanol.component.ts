import { Component, ElementRef,Renderer2,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espanol',
  templateUrl: './espanol.component.html',
  styleUrls: ['./espanol.component.css']
})
export class EspanolComponent{

  constructor(private routes: Router, private renderer: Renderer2){}
  


  

}
