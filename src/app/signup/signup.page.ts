import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(

    public authSerives: AuthenticationService,
    public router:Router


  ) { }

  ngOnInit() {
  }


  signUp(name,email, password,manager){

    this.authSerives.registerUser(email.value, password.value)
    .then((res)=>{

      const userData : User = {
        uid: res.user.uid,
        email: res.user.email,    
        manager:manager.value,
        name: name.value,
      }

      this.authSerives.setUserData(userData)
      
      // console.log(res.user.uid )
      // console.log(res.user.email )
      localStorage.setItem('uid',res.user.uid)
      this.router.navigate(['/login']);
     // console.log(localStorage.getItem('uid' ))
    }).catch((error)=>{
      window.alert(error.message)
    })
  }




  loginPage(){ 
    this.router.navigate(['/login']);
 
}

}