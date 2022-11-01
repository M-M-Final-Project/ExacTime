import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  elementary=['ג','ב','א','ו','ה','ד','','ח','ז'];
  seminar=['יא','י','ט','יד','יג','יב','','',''];
  institution_arr=[this.elementary,this.seminar];

  profile={
    user_name:"Michal",
    password:"123456",
    institution:this.institution_arr[0],
    mis_class:16,  
  }

  time={
    date:new Date(),
    status:""
  }



  constructor() {
    this.status_text()
   }

  getProfile(){
    return this.profile;
  }

  getTime(){
    return this.time;
  }

  status_text() {
    switch (this.time.date.getHours()) {
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        this.time.status = '!!!בוקר טוב';
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        this.time.status = '!!!צהריים טובים';
        break;
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        this.time.status = '!!!ערב טוב';
        break;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        this.time.status = '!!!לילה טוב';
        break;
      default:
        this.time.status = '!!!בוקר טוב';
        break;
    }
  }
}
