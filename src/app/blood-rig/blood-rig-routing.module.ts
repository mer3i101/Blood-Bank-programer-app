import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodRigPage } from './blood-rig.page';

const routes: Routes = [
  {
    path: '',
    component: BloodRigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodRigPageRoutingModule {}
