import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndPageRoutingModule } from './end-routing.module';

import { EndPage } from './end.page';

@NgModule({
  imports: [
    ReactiveFormsModule,

    CommonModule,
    FormsModule,
    IonicModule,
    EndPageRoutingModule
  ],
  declarations: [EndPage]
})
export class EndPageModule {}
