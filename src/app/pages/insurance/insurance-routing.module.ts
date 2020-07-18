import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancePage } from './insurance.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancePage,
    children: [
      {
        path: 'insurance1',
        loadChildren: () => import('../insurance1/insurance1.module').then( m => m.Insurance1PageModule)
      },
      {
        path: 'insurance2',
        loadChildren: () => import('../insurance2/insurance2.module').then( m => m.Insurance2PageModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancePageRoutingModule {}
