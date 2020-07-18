import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicPageRoutingModule } from './medic-routing.module';

import { MedicPage } from './medic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicPageRoutingModule
  ],
  declarations: [MedicPage]
})
export class MedicPageModule {}
