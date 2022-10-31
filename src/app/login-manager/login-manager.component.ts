import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  Time!: Number;
  s: string = "";
  constructor() { 
    this.Time = new Date().getHours();
    // this.s = this.Time.toString();
  }

  ngOnInit(): void {
    console.log(this.s);
    console.log(this.Time);
    this.HelloTime();
  }
  HelloTime() {
    switch (this.Time) {
      case 20:
      case 21:
      case 22:
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        console.log("לילה טוב!");
        break;
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        console.log("בוקר טוב!");
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        console.log("צהריים טובים!");
    }
  }
  // HelloTime() {
  //   switch (this.s) {
  //     case "05" || "06" || "07" || "08" || "09" || "10" || "11" || "12":
  //       console.log("בוקר טוב!")
  //       break;
  //     case "13" || "14" || "15" || "16" || "17" || "18":
  //       console.log("צהריים טובים")
  //       break;
  //     case "1"||"19" || "20" || "21" || "22" || "23" || "00" || "1" || "02" || "03" || "04":
  //       console.log("לילה טוב!")
  //       break;
  // default:
  //   console.log("לילה טוב!")
  //   break;
  // }
  // }
}
