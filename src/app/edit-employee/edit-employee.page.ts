import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {


  updateEmployeeForm: FormGroup;
  id:any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private actRoute:ActivatedRoute,
    private fb: FormBuilder,
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id')
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(res=>{
      this.updateEmployeeForm.setValue(res)
    })
  }

  ngOnInit() {
    this.updateEmployeeForm = this.fb.group({
     
      
      orderStatus: ['']
    })
    console.log(this.updateEmployeeForm.value)
  }


  updateForm(){
   
      this.employeeService.UpdateEmployee(this.id , this.updateEmployeeForm.value)
      .then(() => {  
        this.router.navigate(['/employees'])
      }).catch(error => console.log(error))
   
  }



}