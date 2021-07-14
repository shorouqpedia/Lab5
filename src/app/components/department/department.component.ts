import { HtmlAstPath, ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {

  Departments:Department[] = [
    new Department (1,"Web"),
    new Department (2,"Mobile"),
  ];
  addFlag=false;
  flagTitle="Add new Department";
  EditIcon:string[]=new Array;
  NewStd:Department=new Department(0,"");

  SwapFlag(){
    this.addFlag=!this.addFlag;
    if(this.addFlag){
      this.flagTitle="Hide Add";
    }
    else{
      this.flagTitle="Add new Department";
    }
  }
  AddStd(){
    this.Departments.push(this.NewStd)
  }

  DelStd(index:number){
    if(confirm("Are u sure?"))
    this.Departments.splice(index,1);    
  }
  
  EditStd(index:number,id:HTMLElement,name:HTMLElement,idp:HTMLInputElement,namep:HTMLInputElement){

    if(id.offsetParent?.parentElement?.children[4].firstChild?.firstChild?.textContent)
    {
      id.style.display="none";
      idp.classList.remove("d-none");
      name.style.display="none";
      namep.classList.remove("d-none");
      this.EditIcon[index]="done";
    }
    else{
      id.style.display="block";
      idp.classList.add("d-none");
      name.style.display="block";
      namep.classList.add("d-none");
      this.EditIcon[index]="edit";
    }
    console.log(this.Departments);

  }
  

  constructor() { 
    for(let i=0 ; i<this.Departments.length;i++){
      this.EditIcon[i]="edit";
    }
  }

  ngOnInit(): void {
  }

}
