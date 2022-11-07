// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ServiceService } from './service/service.service';
import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
// import { ModalDirective } from 'ngx-bootstrap/modal';
// import { ModalDirective } from "ngx-bootstrap/modal";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExacTime';
  date_now = Date.now();
  dt = new Date(this.date_now);
  hour = new Date(this.date_now).getHours();
  minute = new Date(this.date_now).getMinutes();
  hours = this.hour.toString();
  minutes = this.minute.toString();
  t() {
    if (this.hour < 10) {
      this.hours = "0" + this.hours;
    }
    if (this.minute < 10) {
      this.minutes = "0" + this.minutes;
    }
  }



  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date;//=null
  title1 = 'angular-idle-timeout';


    @ViewChild('childModal', { static: false }) childModal: ModalDirective;



  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router, private service: ServiceService) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this.router.navigate(['/LoginManager']);
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!'
      console.log(this.idleState);
      this.childModal.show();
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.service.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        idle.watch()
        this.timedOut = false;
      } else {
        idle.stop();
      }
    })
    //this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    this.service.setUserLoggedIn(false);
    this.router.navigate(['/']);
  }


  // }

}
