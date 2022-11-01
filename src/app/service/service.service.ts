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
  constructor() { }

  getProfile(){
    return this.profile;
  }
}
