import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments:Department[] = [
    new Department (1,"web"),
    new Department (2,"android"),
  ];
   
  getAllDepartments(){
    return this.departments;
  }

  addDepartment(std:Department){
    this.departments.push(std);
  }

  getDepartment(id:number){
    for (let i = 0; i < this.departments.length; i++) {
      if(this.departments[i].id==id){
        return this.departments[i];
      }
    }
    return new Department(id=-1);
  }

  delDepartment(id:number){
    for (let i = 0; i < this.departments.length; i++) {
      if(this.departments[i].id==id){
        this.departments.splice(i,1);
        break;
      }
    }
  }

  EditDepartment(std:Department){
    for (let i = 0; i < this.departments.length; i++) {
      if(this.departments[i].id==std.id){
        this.departments[i].name=std.name;
        break;
      }
    }
  }


  constructor() { }

}
