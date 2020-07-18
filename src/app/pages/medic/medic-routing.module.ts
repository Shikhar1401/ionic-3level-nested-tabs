import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicPage } from './medic.page';

const routes: Routes = [
  {
    path: '',
    component: MedicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicPageRoutingModule {}
