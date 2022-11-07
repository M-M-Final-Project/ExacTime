import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgIdleKeepaliveModule } from '@ng-idle/core'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
// import { MomentModule } from 'angular-moment';
import { Idle } from '@ng-idle/core';
// import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { UpdatedComponent } from './updated/updated.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClassNumComponent } from './class-num/class-num.component';
import { CycleComponent } from './cycle/cycle.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { ServiceService } from './service/service.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent,
    UpdatedComponent,
    SignUpComponent,
    ClassNumComponent,
    CycleComponent,
    HomePageComponent,
    StudentsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
