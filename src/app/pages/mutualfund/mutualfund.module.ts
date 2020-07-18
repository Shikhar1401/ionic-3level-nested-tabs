import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MutualfundPageRoutingModule } from './mutualfund-routing.module';

import { MutualfundPage } from './mutualfund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MutualfundPageRoutingModule
  ],
  declarations: [MutualfundPage]
})
export class MutualfundPageModule {}
