import {Component} from 'angular2/core';

export class Student{

    StudentID: number;
    StudentFName: string;
    StudentLName: string;
    StudentFeesStatus:boolean;


}

const STUDENTS: Student[] = [
  { StudentID: 11, StudentFName: 'Mr. Nice', StudentLName:'aaa',StudentFeesStatus:false },
  { StudentID: 12, StudentFName: 'Mr. Nice', StudentLName:'aaa',StudentFeesStatus:false },
  { StudentID: 13, StudentFName: 'Mr. Nice', StudentLName:'aaa',StudentFeesStatus:false },
  { StudentID: 14, StudentFName: 'Mr. Nice', StudentLName:'aaa',StudentFeesStatus:false },
  { StudentID: 15, StudentFName: 'Mr. Nice', StudentLName:'aaa',StudentFeesStatus:false },
  ];

@Component
({
    selector: 'student-info',
    templateUrl:`app/Student.component.html`
})

export class StudentComponent{

title = 'Tour of Heroes';
 studentInfo = STUDENTS; 

}

