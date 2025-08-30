import { Component, OnInit } from '@angular/core';
import { Authentication2Service } from '../shared/authentication2.service';
import { Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  constructor(
    public authSerives: Authentication2Service,
    public router:Router,
    public afStore:AngularFirestore,
    private storage: Storage 

    
  ) { }

  ngOnInit() {
  }


  logIn(email, password){

    this.authSerives.signIn(email.value, password.value)
    .then((res)=>{ 
      
        this.authSerives.getUser(res.user.uid).snapshotChanges().subscribe((data:any)=>{
          let userData=data.payload.val()
          
          this.storage.set('uid',userData.uid);
          this.storage.set('email',userData.email);

          userData.manager
          this.router.navigate(['/index-home'],
          { queryParams: { userType: userData.manager} })
         

        })
    
   

    }).catch((error)=>{
      window.alert(error.message)
    })
  }


  signupPage(): void{ 
      this.router.navigate(['/signup2']);
   
  }
     
}