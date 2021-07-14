import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styles: [
  ]
})
export class DepartmentAddComponent implements OnInit {

  @Input() addFlag:any;
  NewDept:Department=new Department(0,"");

  @Output() onDeptAdd:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  cancel(){
    this.addFlag=!this.addFlag;
    this.onDeptAdd.emit(this.addFlag);
  }
  AddDept(){
    console.log(this.NewDept);
    this.deptServic.addDepartment(this.NewDept);
    this.cancel();
  }

  constructor(public deptServic:DepartmentService) {
  }
  
  ngOnInit(): void {
  }

}
