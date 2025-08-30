import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authSerives: AuthenticationService,
    public router:Router
  ) { }

  ngOnInit() {
  }


  logIn(email, password){

    this.authSerives.signIn(email.value, password.value)
    .then((res)=>{ 
      localStorage.setItem('uid',res.user.uid) 
            localStorage.setItem('uid',res.user.uid) 

      this.router.navigate(['/employees']);
    }).catch((error)=>{
      window.alert(error.message)
    })
  }


  signupPage(){ 
      this.router.navigate(['/signup']);
   
  }
     
}