import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospPage } from './hosp.page';

const routes: Routes = [
  {
    path: '',
    component: HospPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospPageRoutingModule {}
