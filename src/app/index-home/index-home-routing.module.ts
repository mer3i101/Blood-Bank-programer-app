import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexHomePage } from './index-home.page';

const routes: Routes = [
  {
    path: '',
    component: IndexHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexHomePageRoutingModule {}
