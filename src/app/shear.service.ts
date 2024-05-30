import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShearService {

  constructor() { }


  getrequest(){
    return [
      {id:1 , Name:"Akshay" , Roll_No:52},
      {id:2 , Name:"Chandraknat" , Roll_No:22},
      {id:3 , Name:"Babar" , Roll_No:23},
      {id:4 , Name:"Jayashri" , Roll_No:54},
      {id:5 , Name:"Naksh" , Roll_No:52},
    ]
  }
}
