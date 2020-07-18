import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mutualfund2Page } from './mutualfund2.page';

const routes: Routes = [
  {
    path: '',
    component: Mutualfund2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mutualfund2PageRoutingModule {}
