import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACabanaPageRoutingModule } from './a-cabana-routing.module';

import { ACabanaPage } from './a-cabana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACabanaPageRoutingModule
  ],
  declarations: [ACabanaPage]
})
export class ACabanaPageModule {}
