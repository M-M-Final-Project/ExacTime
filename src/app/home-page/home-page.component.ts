import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  text_time = '';
  cycle_comp = true;
  class_num_comp = false;
  students_comp = false;
  
  date = new Date();
  hour = this.date.getHours();
  constructor() {
    this.status();
   }

  ngOnInit(): void {
  }

  status() {
    switch (this.hour) {
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        this.text_time = '!!!בוקר טוב';
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        this.text_time = '!!!צהריים טובים';
        break;
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        this.text_time = '!!!ערב טוב';
        break;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        this.text_time = '!!!לילה טוב';
        break;
      default:
        this.text_time = '!!!בוקר טוב';
        break;
    }
  }

  change_comp() {
    if (this.cycle_comp == true) {
      this.cycle_comp = false;
      this.class_num_comp = true;
    }
    else if ((this.class_num_comp = true)) {
      this.class_num_comp = false;
      this.students_comp = true;
    }
  }
  back() {
    if (this.class_num_comp == true) {
      this.cycle_comp = true;
      this.class_num_comp = false;
    }
    else if(this.students_comp==true){
      this.class_num_comp=true;
      this.students_comp=false
    }
  }

}
