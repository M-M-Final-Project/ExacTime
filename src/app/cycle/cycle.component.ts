import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  // profile: any;
  institution: any;
  cycle_selected='';
  constructor(private serv:ServiceService) {
    // this.profile=serv.getProfile();
    // this.institution=this.profile.institution;
    this.institution=serv.getProfile().institution;
   }

  ngOnInit(): void {
  }
  btn(i:string){
    this.cycle_selected=i;
    // alert(this.cycle_selected);
    
  }

}
