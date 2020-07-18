import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mutualfund2PageRoutingModule } from './mutualfund2-routing.module';

import { Mutualfund2Page } from './mutualfund2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mutualfund2PageRoutingModule
  ],
  declarations: [Mutualfund2Page]
})
export class Mutualfund2PageModule {}
