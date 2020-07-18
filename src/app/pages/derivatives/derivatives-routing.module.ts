import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DerivativesPage } from './derivatives.page';

const routes: Routes = [
  {
    path: '',
    component: DerivativesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DerivativesPageRoutingModule {}
