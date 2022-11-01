import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-class-num',
  templateUrl: './class-num.component.html',
  styleUrls: ['./class-num.component.css']
})
export class ClassNumComponent implements OnInit {
  number_class: number[]=[];
  // number_class=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  num_class;
  constructor(private serv:ServiceService) { 
    this.num_class=serv.getProfile().mis_class;
    this.class_num();
  }

  class_num(){
    for (let i = 1; i <= this.num_class; i++) {
        this.number_class.push(i);
    }
  }

  ngOnInit(): void {
  }
  btn(i:number){
    this.num_class=i;
    // alert(this.num_class);
    
  }

}
