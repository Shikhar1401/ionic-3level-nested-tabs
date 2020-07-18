import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dollar1PageRoutingModule } from './dollar1-routing.module';

import { Dollar1Page } from './dollar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dollar1PageRoutingModule
  ],
  declarations: [Dollar1Page]
})
export class Dollar1PageModule {}
