import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(params =>{
      const element = document.querySelector("#" + params);
      if(element) element.scrollIntoView();
    });
  }

}
