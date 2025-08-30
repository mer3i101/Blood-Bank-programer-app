import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { hosService } from '../shared/hos.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-volanteer',
  templateUrl: './volanteer.page.html',
  styleUrls: ['./volanteer.page.scss'],
})
export class VolanteerPage implements OnInit {
  hospitalForm: FormGroup;

  constructor(
    private hosService: hosService,
    private router: Router,
    private fb: FormBuilder,
    private modalCtrl:ModalController

  ) { }

  ngOnInit() {
    this.hospitalForm = this.fb.group({
      par: [''],
      non: [''],
      con: [''],
      type: [''],
      doc: [''],
      sic: [''],
      nor: [''],

    })
  }

  toggleToFalse(){
    return true
  }


  formSubmit(){
    
    if (!this.hospitalForm.valid) {
      return false;
      
    }else{
      
      this.hosService.createhospital(this.hospitalForm.value)
      .then(res => {
        console.log(res)
        this.hospitalForm.reset();
        this.router.navigate(['/succ1'])
        this.modalCtrl.dismiss()

      }).catch(error => console.log(error))
    }
  }

}