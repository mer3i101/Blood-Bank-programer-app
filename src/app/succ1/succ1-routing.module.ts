import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Succ1Page } from './succ1.page';

const routes: Routes = [
  {
    path: '',
    component: Succ1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Succ1PageRoutingModule {}
