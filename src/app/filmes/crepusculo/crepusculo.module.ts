import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrepusculoPageRoutingModule } from './crepusculo-routing.module';

import { CrepusculoPage } from './crepusculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrepusculoPageRoutingModule
  ],
  declarations: [CrepusculoPage]
})
export class CrepusculoPageModule {}
