import { Component, OnInit } from '@angular/core';
import { Authentication2Service } from '../shared/authentication2.service';
import { Router } from '@angular/router';
import { user } from '../models/copy';
import { type } from 'os';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

  constructor(

    public authSerives: Authentication2Service,
    public router:Router


  ) { }

  ngOnInit() {
  }


  signUp(name,email,password,manager){

    this.authSerives.registerUser(email.value, password.value)
    .then((res)=>{

      const userData : user = {
        uid: res.user.uid,
        email: res.user.email,
        name: name.value,
        manager:manager.value


      
      }
      this.router.navigate(['/singup2']);

      this.authSerives.setUserData(userData)
      
      // console.log(res.user.uid )
      // console.log(res.user.email )
      localStorage.setItem('uid',res.user.uid)
      this.router.navigate(['/login2']);
     // console.log(localStorage.getItem('uid' ))
    }).catch((error)=>{
      window.alert(error.message)
    })
  }




  loginPage(){ 
    this.router.navigate(["/login2"]);
 
}

}
