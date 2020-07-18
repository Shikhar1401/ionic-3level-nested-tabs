import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insurance1PageRoutingModule } from './insurance1-routing.module';

import { Insurance1Page } from './insurance1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insurance1PageRoutingModule
  ],
  declarations: [Insurance1Page]
})
export class Insurance1PageModule {}
