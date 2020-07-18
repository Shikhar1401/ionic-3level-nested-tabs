import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Realestate1Page } from './realestate1.page';

const routes: Routes = [
  {
    path: '',
    component: Realestate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Realestate1PageRoutingModule {}
