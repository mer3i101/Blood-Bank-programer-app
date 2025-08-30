import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Succ1PageRoutingModule } from './succ1-routing.module';

import { Succ1Page } from './succ1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Succ1PageRoutingModule
  ],
  declarations: [Succ1Page]
})
export class Succ1PageModule {}
