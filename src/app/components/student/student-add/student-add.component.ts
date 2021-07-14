import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: [
  ]
})
export class StudentAddComponent implements OnInit {

  @Input() addFlag:any;
  NewStd:Student=new Student(0,"",0);

  @Output() onStdAdd:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  cancel(){
    this.addFlag=!this.addFlag;
    this.onStdAdd.emit(this.addFlag);
  }
  AddStd(){
    console.log(this.NewStd);
    this.stdServic.addStudent(this.NewStd);
    this.cancel();
  }

  constructor(public stdServic:StudentService) {
  }
  
  ngOnInit(): void {
  }

}
