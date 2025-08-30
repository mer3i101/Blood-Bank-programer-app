import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexHomePageRoutingModule } from './index-home-routing.module';

import { IndexHomePage } from './index-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexHomePageRoutingModule
  ],
  declarations: [IndexHomePage]
})
export class IndexHomePageModule {}
