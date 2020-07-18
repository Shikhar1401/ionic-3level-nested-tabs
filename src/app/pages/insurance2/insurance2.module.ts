import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insurance2PageRoutingModule } from './insurance2-routing.module';

import { Insurance2Page } from './insurance2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insurance2PageRoutingModule
  ],
  declarations: [Insurance2Page]
})
export class Insurance2PageModule {}
