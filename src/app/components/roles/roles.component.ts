import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
//Typescript class
export class RolesComponent {
  //Typescript Data Types
  //string,number,boolean,date,object,array,null,undefined
  //creating variable
  //Now if we want to see these variable on our page 
  //For that purpose we need to do Data Binding
  firstName: string = "Creating Angular version-18 project"
  angularVersion = "version-18";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "button";
  message: string = "Welcome to the world of Angular"

  users = [
    { id: 1, name: 'Alice', age: 25, role: 'Admin' },
    { id: 2, name: 'Bob', age: 28, role: 'Manager' },
    { id: 3, name: 'Charlie', age: 22, role: 'Developer' },
    { id: 4, name: 'David', age: 30, role: 'Tester' }
  ];

  newUser = {
    id: 0, name: '', age: 0, role: '',
  }

  addEmployee() {
    this.users.push(this.newUser)
    // this.newUser = { 
    //   id:0, name:'',age:0 ,role:'',
    // }
  }
  deleteEmployee(){
    this.users.pop()       
  }
}
