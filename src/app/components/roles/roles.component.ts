import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DragDropModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
//Typescript class
export class RolesComponent {
  //Typescript Data Types
  //string,number,boolean,date,object,array,null,undefined
  //creating variable
  //Now if we want to see these variable on our page
  //For that purpose we need to do Data Binding
  firstName: string = 'Creating Angular version-18 project';
  angularVersion = 'version-18';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';
  message: string = 'Welcome to the world of Angular';

  users = [
    { id: 'Emp01', name: 'Alice', age: 25, role: 'Admin' },
    { id: 'Emp02', name: 'Bob', age: 28, role: 'Manager' },
    { id: 'Emp03', name: 'Charlie', age: 22, role: 'Developer' },
    { id: 'Emp04', name: 'David', age: 30, role: 'Tester' },
  ];
  // displayedColumn:string[] = ['Sr.No','id','name','age','role']

  newUser = {
    id: '',
    name: '',
    age: 0,
    role: '',
  };

  addEmployee() {
    this.users.push({ ...this.newUser });
  }

  deleteEmployee(index: number) {
    this.users.splice(index, 1);
  }

  // modifyEmployee() {
  // }

  drop(event: CdkDragDrop<[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
