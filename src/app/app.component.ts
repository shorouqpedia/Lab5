import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITI';
  nav="std";
  
  navChoice(e:any){
    this.nav=e;
  }
}


