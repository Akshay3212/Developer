import { Component } from '@angular/core';
import { ShearService } from '../shear.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  dataservice:any=[];
 constructor(private serv:ShearService){

 }

 ngOnInit(){
     this.dataservice=this.serv.getrequest();
 }
}
