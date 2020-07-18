import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DollarPageRoutingModule } from './dollar-routing.module';

import { DollarPage } from './dollar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DollarPageRoutingModule
  ],
  declarations: [DollarPage]
})
export class DollarPageModule {}
