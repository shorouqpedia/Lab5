import { DepartmentService } from './../../../_services/department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent implements OnInit {
  
  constructor(public deptService:DepartmentService) { 
  }
  
  departments:Department[]=[];
  addFlag=false;
  EditFlag:number[]=new Array;
  tempDept:Department=new Department();
  
  DelDept(id?:number){
    if(confirm("Are u sure?")){
      if(id!=null){
        this.deptService.delDepartment(id)
      }
    }
  }

  EditDept(index:number,id:HTMLElement,name:HTMLElement,idp:HTMLInputElement,namep:HTMLInputElement,note:HTMLElement)
  {
    if(id.offsetParent?.parentElement?.children[4].firstChild?.firstChild?.textContent=="edit")
    {
      note.innerText="Press \"Esc\" key to cancel the edit";
      note.classList.remove("d-none");
      this.EditFlag[index]++;
      id.style.display="none";
      idp.classList.remove("d-none");
      name.style.display="none";
      namep.classList.remove("d-none");
      this.tempDept.id=Number(id.innerText.trim());
      this.tempDept.name=name.innerText.trim();
      document.onkeydown=(e)=>{
        if(e.key==="Escape"){
          note.classList.add("d-none");
          id.style.display="block";
          idp.classList.add("d-none");
          name.style.display="block";
          namep.classList.add("d-none");
          this.EditFlag[index]--;
        }
      }
    }
    else{
      note.classList.add("d-none");
      id.style.display="block";
      idp.classList.add("d-none");
      name.style.display="block";
      namep.classList.add("d-none");
      this.EditFlag[index]--;
      this.deptService.EditDepartment(this.tempDept);
    }
  }
  editState(){
    let copy= [...this.EditFlag];
    return copy.sort((a,b)=>b-a)[0]==0;  
  }

  recieveFlag(flag:any){
    this.addFlag=flag;
  }
  SwapFlag(){
    this.addFlag=!this.addFlag;
  }

  ngOnInit(): void {
    this.departments=this.deptService.getAllDepartments();
    for(let i=0 ; i<this.departments.length+1;i++){
      this.EditFlag[i]=0;
    }
  }

}
