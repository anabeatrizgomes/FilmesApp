import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CincoPassosPageRoutingModule } from './cinco-passos-routing.module';

import { CincoPassosPage } from './cinco-passos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CincoPassosPageRoutingModule
  ],
  declarations: [CincoPassosPage]
})
export class CincoPassosPageModule {}
