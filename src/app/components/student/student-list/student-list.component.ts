import { StudentService } from './../../../_services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit {
  
  constructor(public stdService:StudentService) { 
  }
  
  students:Student[]=[];
  addFlag=false;
  EditFlag:number[]=new Array;
  tempStd:Student=new Student();
  
  /** filter part */
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.students);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
/**end of filter */
  DelStd(id?:number){
    if(confirm("Are u sure?")){
      if(id!=null){
        this.stdService.delStudent(id)
      }
    }
  }

  EditStd(index:number,id:HTMLElement,name:HTMLElement,age:HTMLElement,idp:HTMLInputElement,namep:HTMLInputElement,agep:HTMLInputElement,note:HTMLElement)
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
      age.style.display="none";
      agep.classList.remove("d-none");
      this.tempStd.id=Number(id.innerText.trim());
      this.tempStd.name=name.innerText.trim();
      this.tempStd.age=Number(age.innerText.trim());
      document.onkeydown=(e)=>{
        if(e.key==="Escape"){
          note.classList.add("d-none");
          id.style.display="block";
          idp.classList.add("d-none");
          name.style.display="block";
          namep.classList.add("d-none");
          age.style.display="block";
          agep.classList.add("d-none");
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
      age.style.display="block";
      agep.classList.add("d-none");
      this.EditFlag[index]--;
      this.stdService.EditStudent(this.tempStd);
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
    this.students=this.stdService.getAllStudents();
    for(let i=0 ; i<this.students.length+1;i++){
      this.EditFlag[i]=0;
    }
  }

}
