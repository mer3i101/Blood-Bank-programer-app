import { Component, OnInit } from '@angular/core';
import { hosService } from '../shared/hos.service';
import { hospital } from '../models/hos';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-hosp',
  templateUrl: './hosp.page.html',
  styleUrls: ['./hosp.page.scss'],
})
export class HospPage implements OnInit {

  hospital= [];
  hospital_filter;string;
  constructor(  private hosService: hosService,
    public authSerives: AuthenticationService,) { }

  ngOnInit() {
    this.fetchhospital()

    let hospitalRes = this.hosService.gethospitalList()
    hospitalRes.snapshotChanges().subscribe(res =>{
      this.hospital = []
      res.forEach(item =>{
        let a = item.payload.toJSON()
        a['$key'] = item.key
        this.hospital.push(a as hospital)
      })
    })
  }

  fetchhospital(){
    this.hosService.gethospitalList().valueChanges().subscribe(res =>{
      console.log(res)
    })
  }

 deletehospital(id){
  console.log(id)
  if (window.confirm('Are you sure ? ')) {
    this.hosService.deleteEmployee(id) 
  }
  
  }

}