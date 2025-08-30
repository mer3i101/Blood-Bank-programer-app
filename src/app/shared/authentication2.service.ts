import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { user } from '../models/copy';
import { AngularFireList, AngularFireDatabase,AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class Authentication2Service {

  userData: any;
  employeeListRef : AngularFireList<any>;
 


  constructor(
   public afStore:AngularFirestore,
   public ngFireAuth: AngularFireAuth,
   
   public router:Router,
   private db:AngularFireDatabase
  ) { 
    this.ngFireAuth.authState.subscribe(user =>{
      if (user) {
        this.userData = user
        localStorage.setItem('user',JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user'))
      } else {
        localStorage.setItem('user',null)
        JSON.parse(localStorage.getItem('user'))
      }
    })


    this.employeeListRef = this.db.list('/user')

  }



signIn(email:string,password:string){
  return this.ngFireAuth.signInWithEmailAndPassword(email,password)
}

registerUser(email:string,password:string){
  return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
}


get isLoggedIn() : boolean{
  const user =  JSON.parse(localStorage.getItem('user'+'need to bloood'))
  return (user !== null ) ? true:false
}


setUserData(user:any){

  const userRef : AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`)
  const  employeeRef: AngularFireObject<any> = this.db.object( `/users/${user.uid}`)

  const userData : user = {
    uid: user.uid,
    email: user.email,
    name: user.name,
    manager:user.manager

    
  }

  employeeRef.set(userData)


  return userRef.set(userData,{
    merge: true
  })
}



signOut(){
  return this.ngFireAuth.signOut().then(()=>{
     localStorage.removeItem('user') 

     localStorage.removeItem('uid' ) 
     this.router.navigate(['login'])
     
  })
}

signOutt(){
  return this.ngFireAuth.signOut().then(()=>{
     localStorage.removeItem('user') 
     localStorage.removeItem('uid' ) 
     this.router.navigate(['login2'])
     
  })
}

getUser(id:string){
  return this.db.object('/users/'+ id)
}



}