import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CincoPassosPage } from './cinco-passos.page';

const routes: Routes = [
  {
    path: '',
    component: CincoPassosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CincoPassosPageRoutingModule {}
