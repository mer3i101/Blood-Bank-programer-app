import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccPageRoutingModule } from './succ-routing.module';

import { SuccPage } from './succ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccPageRoutingModule
  ],
  declarations: [SuccPage]
})
export class SuccPageModule {}
