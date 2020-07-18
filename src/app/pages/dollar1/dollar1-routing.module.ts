import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dollar1Page } from './dollar1.page';

const routes: Routes = [
  {
    path: '',
    component: Dollar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dollar1PageRoutingModule {}
