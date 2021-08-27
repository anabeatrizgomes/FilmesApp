import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACabanaPage } from './a-cabana.page';

const routes: Routes = [
  {
    path: '',
    component: ACabanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACabanaPageRoutingModule {}
