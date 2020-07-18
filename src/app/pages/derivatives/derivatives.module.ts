import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DerivativesPageRoutingModule } from './derivatives-routing.module';

import { DerivativesPage } from './derivatives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DerivativesPageRoutingModule
  ],
  declarations: [DerivativesPage]
})
export class DerivativesPageModule {}
