import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExacTime';
  date_now=Date.now();
  dt=new Date(this.date_now);
  hour=new Date(this.date_now).getHours();
  minute=new Date(this.date_now).getMinutes();
  hours=this.hour.toString();
  minutes=this.minute.toString();
  t(){
  if(this.hour<10){
    this.hours="0"+this.hours;
  }
  if(this.minute<10){
    this.minutes="0"+this.minutes;
  }

}
}
