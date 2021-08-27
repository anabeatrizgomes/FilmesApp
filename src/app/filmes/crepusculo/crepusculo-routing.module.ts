import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepusculoPage } from './crepusculo.page';

const routes: Routes = [
  {
    path: '',
    component: CrepusculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepusculoPageRoutingModule {}
