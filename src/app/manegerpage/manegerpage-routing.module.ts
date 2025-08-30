import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManegerpagePage } from './manegerpage.page';

const routes: Routes = [
  {
    path: '',
    component: ManegerpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManegerpagePageRoutingModule {}
