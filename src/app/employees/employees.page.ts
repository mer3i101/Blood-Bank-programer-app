import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../models/volanteer';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  querytext: string;
  employees = [];
  employee_filter:string;

  constructor(  private employeeService: EmployeeService,
    public authSerives: AuthenticationService,) { }

  ngOnInit() {
    this.fetchEmployees()

    let employeesRes = this.employeeService.getEmployeeList()
    employeesRes.snapshotChanges().subscribe(res =>{
      this.employees = []
      res.forEach(item =>{
        let a = item.payload.toJSON()
        a['$key'] = item.key
        this.employees.push(a as Employee)
      })
    })
  }
   employee(evt){


  }

  fetchEmployees(){
    this.employeeService.getEmployeeList().valueChanges().subscribe(res =>{
      console.log(res)
    })
  }

 deleteEmployees(id){
  console.log(id)
  if (window.confirm('Are you sure ? ')) {
    this.employeeService.deleteEmployee(id) 
  }
  
  }

}