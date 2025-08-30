import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'; 


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder,
    private modalCtrl:ModalController,
    private storage: Storage ,

  ) { }

  async ngOnInit() {
    const uid = await this.storage.get('uid',); 
    const email = await this.storage.get('email',); 

    this.employeeForm = this.fb.group({
      name: [''],
      mhm: [''],
      email: [email],

      mobile: [''],
      details: [''],
      A: [''],
      B: [''],
      D: [''],
      E: [''],
      F: [''],
      uid:[uid],
      date: [''],
      orderStatus:['في الأنتظار '],


    })
  }

  toggleToFalse(){
    return true
  }


  formSubmit(){
    if (!this.employeeForm.valid) {
      return false;
      
    }else{
      
      this.employeeService.createEmployee(this.employeeForm.value)
      .then(res => {
        console.log(res)
        this.employeeForm.reset();
        this.router.navigate(['/succ'])
        this.modalCtrl.dismiss()
      }).catch(error => console.log(error))
    }
  }

}