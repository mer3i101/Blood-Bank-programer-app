import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-manegerpage',
  templateUrl: './manegerpage.page.html',
  styleUrls: ['./manegerpage.page.scss'],
})
export class ManegerpagePage implements OnInit {

  constructor(public routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

}
