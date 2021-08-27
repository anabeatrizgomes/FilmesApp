import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolMeiaNoitePage } from './sol-meia-noite.page';

const routes: Routes = [
  {
    path: '',
    component: SolMeiaNoitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolMeiaNoitePageRoutingModule {}
