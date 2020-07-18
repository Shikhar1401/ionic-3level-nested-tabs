import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartsPage } from './carts.page';

const routes: Routes = [
  {
    path: '',
    component: CartsPage,
    children: [  
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
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
export class CartsPageRoutingModule {}
