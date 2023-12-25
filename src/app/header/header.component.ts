import { Component, OnInit } from '@angular/core';
export class Employee{
  // id: number;
  name:string;
  age:number;
  mobileno:number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Crud";

  constructor() { }

  ngOnInit(): void {
  }
  EmployeeList:Employee[]=[];
  id:number = 0;
  name:string = ''
  age:number = 0
  mobileno:number = 0
  isEdit:boolean = false;
  
  // public updateuser:any;

  submit(){
      const tempmodel=new Employee()
      // tempmodel.id = this.id;
      tempmodel.name = this.name;
      tempmodel.age = this.age;
      tempmodel.mobileno = this.mobileno;
      this.EmployeeList.push(tempmodel);
      this.clearItems();
  }

  delete(item){
    this.EmployeeList.splice(item,1);
    // this.clearItems();
  }

  update(item){
      this.isEdit = true;
      // this.id = item.id;
      this.name = item.name;
      this.age = item.age;
      this.mobileno = item.mobileno;
    }

    finalupdate(){
      const index = this.EmployeeList.findIndex(x => x.name === this.name);
      // this.EmployeeList[index].id = this.id;
      this.EmployeeList[index].name = this.name;
      this.EmployeeList[index].age = this.age;
      this.EmployeeList[index].mobileno = this.mobileno;
      this.clearItems();
    }
   
    clearItems(){
      this.id = 0;
      this.name ='';
      this.age = 0,
      this.mobileno = 0 
      this.isEdit = false;
    }
  }





