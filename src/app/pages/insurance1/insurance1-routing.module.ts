import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Insurance1Page } from './insurance1.page';

const routes: Routes = [
  {
    path: '',
    component: Insurance1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Insurance1PageRoutingModule {}
