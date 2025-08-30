import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccPage } from './succ.page';

const routes: Routes = [
  {
    path: '',
    component: SuccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccPageRoutingModule {}
