import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpManagerServiceService } from '../service/sign-up-manager-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService:SignUpManagerServiceService) { }
  model: User = new User();

  ngOnInit(): void {
  }


    //get data from form and check them in DB
    onSubmit(loginForm: NgForm) {
      console.log(this.model)
      //in C# will send to get by id befor update- check if exist
      this.signUpService.createUser(this.model)

    }
  }
  export class User {
  
    constructor() {  }
  
    public userName!: string ;
    // | undefined;
    public password!: string;
    //  | undefined;
    public email!: string;
  

}
