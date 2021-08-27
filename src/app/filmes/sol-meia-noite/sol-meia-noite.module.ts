import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolMeiaNoitePageRoutingModule } from './sol-meia-noite-routing.module';

import { SolMeiaNoitePage } from './sol-meia-noite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolMeiaNoitePageRoutingModule
  ],
  declarations: [SolMeiaNoitePage]
})
export class SolMeiaNoitePageModule {}
