import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Realestate1PageRoutingModule } from './realestate1-routing.module';

import { Realestate1Page } from './realestate1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Realestate1PageRoutingModule
  ],
  declarations: [Realestate1Page]
})
export class Realestate1PageModule {}
