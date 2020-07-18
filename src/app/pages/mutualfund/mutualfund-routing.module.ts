import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MutualfundPage } from './mutualfund.page';

const routes: Routes = [
  {
    path: '',
    component: MutualfundPage,
    children: [
      {
        path: 'mutualfund1',
        loadChildren: () => import('../mutualfund1/mutualfund1.module').then( m => m.Mutualfund1PageModule)
      },
      {
        path: 'mutualfund2',
        loadChildren: () => import('../mutualfund2/mutualfund2.module').then( m => m.Mutualfund2PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MutualfundPageRoutingModule {}
