import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule}  from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolanteerPageRoutingModule } from './volanteer-routing.module';

import { VolanteerPage } from './volanteer.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VolanteerPageRoutingModule
  ],
  declarations: [VolanteerPage]
})
export class VolanteerPageModule {}
