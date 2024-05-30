import { Component, Input } from '@angular/core';
import { ShearService } from '../shear.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
   
 @Input() datafromParent = "";


 serdata:any=[];
 constructor(private shear:ShearService){
    this.serdata=this.shear.getrequest();
 }
}
