import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [     
      {
        path: 'homefeed',
        loadChildren: () => import('../pages/homefeed/homefeed.module').then( m => m.HomefeedPageModule)
      },
      {
        path: 'dollar',
        loadChildren: () => import('../pages/dollar/dollar.module').then( m => m.DollarPageModule)
      },
      {
        path: 'medics',
        loadChildren: () => import('../pages/medics/medics.module').then( m => m.MedicsPageModule)
      },
      {
        path: 'carts',
        loadChildren: () => import('../pages/carts/carts.module').then( m => m.CartsPageModule)
      },
      {
        path: 'policies',
        loadChildren: () => import('../pages/policies/policies.module').then( m => m.PoliciesPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

