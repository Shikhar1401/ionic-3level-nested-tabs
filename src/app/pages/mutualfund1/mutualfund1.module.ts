import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mutualfund1PageRoutingModule } from './mutualfund1-routing.module';

import { Mutualfund1Page } from './mutualfund1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mutualfund1PageRoutingModule
  ],
  declarations: [Mutualfund1Page]
})
export class Mutualfund1PageModule {}
