import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulpaDasEstrelasPageRoutingModule } from './culpa-das-estrelas-routing.module';

import { CulpaDasEstrelasPage } from './culpa-das-estrelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulpaDasEstrelasPageRoutingModule
  ],
  declarations: [CulpaDasEstrelasPage]
})
export class CulpaDasEstrelasPageModule {}
