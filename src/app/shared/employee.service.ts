import { Injectable } from '@angular/core';

import { AngularFireList , AngularFireObject,AngularFireDatabase } from '@angular/fire/compat/database';
import { Employee } from '../models/volanteer';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeListRef : AngularFireList<any>;
  employeeRef: AngularFireObject<any>;


  constructor( private db:AngularFireDatabase) { 
    this.employeeListRef = db.list('/employee')
  }

  createEmployee(emp:Employee){
  
    return this.employeeListRef.push({
      name: emp.name,
      mhm: emp.mhm,
      date:emp.date,

      mobile:emp.mobile,
      details:emp.details,
      A:emp.A,
      B:emp.B,
      D:emp.D,
      E:emp.E,
      F:emp.F,
      uid:emp.uid,
      orderStatus:emp.orderStatus,
      email:emp.email,

    })
  }


  getEmployee(id:string){
    return this.employeeRef = this.db.object('/employee/'+ id)
  }

  getEmployeeList(){
    return this.employeeListRef = this.db.list('/employee')
  }


  UpdateEmployee(id,emp:Employee){
    return this.employeeRef.update({
     
      
      orderStatus:emp.orderStatus,
    })
  }


  deleteEmployee(id:string){
      this.employeeRef = this.db.object('/employee/'+ id)
      this.employeeRef.remove()
  }


}