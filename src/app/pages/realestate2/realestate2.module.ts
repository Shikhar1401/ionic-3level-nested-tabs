import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Realestate2PageRoutingModule } from './realestate2-routing.module';

import { Realestate2Page } from './realestate2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Realestate2PageRoutingModule
  ],
  declarations: [Realestate2Page]
})
export class Realestate2PageModule {}
