import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealestatePage } from './realestate.page';

const routes: Routes = [
  {
    path: '',
    component: RealestatePage,
    children: [
      {
        path: 'realestate1',
        loadChildren: () => import('../realestate1/realestate1.module').then( m => m.Realestate1PageModule)
      },
      {
        path: 'realestate2',
        loadChildren: () => import('../realestate2/realestate2.module').then( m => m.Realestate2PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestatePageRoutingModule {}
