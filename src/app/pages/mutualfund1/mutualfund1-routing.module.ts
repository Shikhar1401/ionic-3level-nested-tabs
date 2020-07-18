import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mutualfund1Page } from './mutualfund1.page';

const routes: Routes = [
  {
    path: '',
    component: Mutualfund1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mutualfund1PageRoutingModule {}
