import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulpaDasEstrelasPage } from './culpa-das-estrelas.page';

const routes: Routes = [
  {
    path: '',
    component: CulpaDasEstrelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulpaDasEstrelasPageRoutingModule {}
