import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicsPageRoutingModule } from './medics-routing.module';

import { MedicsPage } from './medics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicsPageRoutingModule
  ],
  declarations: [MedicsPage]
})
export class MedicsPageModule {}
