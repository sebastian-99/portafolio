import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobrepagina',
  templateUrl: './sobrepagina.component.html',
  styleUrls: ['./sobrepagina.component.css']
})
export class SobrepaginaComponent implements OnInit {

  constructor(private route:  ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(params =>{
      const element = document.querySelector("#" + params);
      if(element) element.scrollIntoView();
    });
  }

}
