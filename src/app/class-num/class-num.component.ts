import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-num',
  templateUrl: './class-num.component.html',
  styleUrls: ['./class-num.component.css']
})
export class ClassNumComponent implements OnInit {
  number_class=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  num_class=0;
  constructor() { }

  ngOnInit(): void {
  }
  btn(i:number){
    this.num_class=i;
    alert(this.num_class);
    
  }

}
