import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students_name=["מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד","מיכל מערבי","מרגלית אברמד",];
  name_selected='';
  constructor() { }

  ngOnInit(): void {
  }

  btn(i:string){
    this.name_selected=i;
    alert(this.name_selected);
    
  }

}
