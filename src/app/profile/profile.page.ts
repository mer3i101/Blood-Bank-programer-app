import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../models/volanteer';
import { AuthenticationService } from '../shared/authentication.service';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  querytext: string;
  employees = [];
  employee_filter:string;
   

  constructor(private employeeService: EmployeeService,
    public authSerives: AuthenticationService, private storage: Storage ,
    ) { }

    async ngOnInit() 
  {   
     const uid = await this.storage.get('uid'); 
     const email = await this.storage.get('email'); 

    this.fetchEmployees()

    let employeesRes = this.employeeService.getEmployeeList()
    employeesRes.snapshotChanges().subscribe(res =>{
      this.employees = []
      res.forEach(item =>{
        let a = item.payload.toJSON()
        a['$key'] = item.key
        if (a['uid']==uid )
        {  this.employees.push(a as Employee)
        }
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


