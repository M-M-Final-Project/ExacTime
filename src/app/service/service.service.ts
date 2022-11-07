import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private userLoggedIn = new Subject<boolean>();


  elementary = ['ג', 'ב', 'א', 'ו', 'ה', 'ד', '', 'ח', 'ז'];
  seminar = ['יא', 'י', 'ט', 'יד', 'יג', 'יב', '', '', ''];
  institution_arr = [this.elementary, this.seminar];
  students_name = ["מיכל מערבי", "מרגלית אברמד", "שרי מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד", "מיכל מערבי", "מרגלית אברמד",];


  profile = {
    user_name: "Michal",
    password: "123456",
    institution: this.institution_arr[0],
    mis_class: 16,
  }

  time = {
    date: new Date(),
    status: ""
  }

  student = {
    name: "",
    cycle: "",
    class_num: 0,
    time: new Date()
  }


  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  setDate(date: Date) {
    this.time.date = date;
  }

  getStudentsName() {
    return this.students_name;
  }

  setStudentCycle(cycle: string) {
    this.student.cycle = cycle;
  }

  setStudentClass_num(class_num: number) {
    this.student.class_num = class_num;
  }

  setStudentTime(time: Date) {
    this.student.time = time;
  }

  setStudentName(name: string) {
    this.student.name = name;
  }

  getStudent() {
    return this.student;
  }

  constructor() {
    this.status_text()
    this.userLoggedIn.next(false);
  }

  getProfile() {
    return this.profile;
  }

  getTime() {
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
