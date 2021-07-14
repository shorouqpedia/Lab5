import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[] = [
    new Student (1,"shorouq",26),
    new Student (2,"Sara",20),
    new Student (3,"Nada",25),
  ];
   
  getAllStudents(){
    return this.students;
  }

  addStudent(std:Student){
    this.students.push(std);
  }

  getStudent(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id){
        return this.students[i];
      }
    }
    return new Student(id=-1);
  }

  delStudent(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id){
        this.students.splice(i,1);
        break;
      }
    }
  }

  EditStudent(std:Student){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==std.id){
        this.students[i].name=std.name;
        this.students[i].age=std.age;
        break;
      }
    }
  }


  constructor() { }

}
