import { Injectable } from '@angular/core';

import { AngularFireList , AngularFireObject,AngularFireDatabase } from '@angular/fire/compat/database';
import {  hospital } from '../models/hos';
 

@Injectable({
  providedIn: 'root'
})
export class hosService {

 
  hospitalListRef : AngularFireList<any>;
  hospitalRef: AngularFireObject<any>;


  constructor( private db:AngularFireDatabase) { 
    this.hospitalListRef = db.list('/hosp')
  }

  createhospital(emp:hospital){
  
    return this.hospitalListRef.push({
      par: emp.par,
      non: emp.non,
      con: emp.con,
      type:emp.type,
      doc:emp.doc,
      sic:emp.sic,
      nor:emp.nor

    })
  }


  gethospital(id:string){
    return this.hospitalRef = this.db.object('/hosp/'+ id)
  }

  gethospitalList(){
    return this.hospitalListRef = this.db.list('/hosp')
  }


  UpdateEmployee(id,emp:hospital){
    return this.hospitalRef.update({
      par: emp.par,
      non: emp.non,
      con: emp.con,
      type:emp.type,
      doc:emp.doc,
      sic:emp.sic,
      nor:emp.nor
    })
  }


  deleteEmployee(id:string){
      this.hospitalRef = this.db.object('/hosp/'+ id)
      this.hospitalRef.remove()
  }


}
