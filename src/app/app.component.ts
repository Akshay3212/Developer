import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice1';

  parentdata:any= [];

  Onclick(Data: any){
    this.parentdata.push(Data);
  }
}
