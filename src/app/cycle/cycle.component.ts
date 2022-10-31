import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  elementary=['ג','ב','א','ו','ה','ד','','ח','ז'];
  seminar=['יא','י','ט','יד','יג','יב','','',''];
  cycle_selected='';
  constructor() { }

  ngOnInit(): void {
  }
  btn(i:string){
    this.cycle_selected=i;
    alert(this.cycle_selected);
    
  }

}
