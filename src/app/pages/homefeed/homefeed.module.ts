import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefeedPageRoutingModule } from './homefeed-routing.module';

import { HomefeedPage } from './homefeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefeedPageRoutingModule
  ],
  declarations: [HomefeedPage]
})
export class HomefeedPageModule {}
