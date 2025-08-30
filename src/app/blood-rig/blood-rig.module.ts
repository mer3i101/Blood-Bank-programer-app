import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodRigPageRoutingModule } from './blood-rig-routing.module';

import { BloodRigPage } from './blood-rig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodRigPageRoutingModule
  ],
  declarations: [BloodRigPage]
})
export class BloodRigPageModule {}
