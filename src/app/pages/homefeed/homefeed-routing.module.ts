import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefeedPage } from './homefeed.page';

const routes: Routes = [
  {
    path: '',
    component: HomefeedPage,
    children: [
      {
        path: 'trades',
        loadChildren: () => import('../trades/trades.module').then( m => m.TradesPageModule)
      },
      {
        path: 'mutualfund',
        loadChildren: () => import('../mutualfund/mutualfund.module').then( m => m.MutualfundPageModule)
      },
      {
          path: 'insurance',
          loadChildren: () => import('../insurance/insurance.module').then( m => m.InsurancePageModule)
      },
      {
        path: 'realestate',
        loadChildren: () => import('../realestate/realestate.module').then( m => m.RealestatePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefeedPageRoutingModule {}
