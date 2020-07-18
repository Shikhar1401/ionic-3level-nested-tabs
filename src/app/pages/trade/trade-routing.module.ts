import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradePage } from './trade.page';

const routes: Routes = [
  {
    path: '',
    component: TradePage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../overview/overview.module').then( m => m.OverviewPageModule)
      },
      {
        path: 'equity',
        loadChildren: () => import('../equity/equity.module').then( m => m.EquityPageModule)
      },
      {
        path: 'derivatives',
        loadChildren: () => import('../derivatives/derivatives.module').then( m => m.DerivativesPageModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradePageRoutingModule {}
