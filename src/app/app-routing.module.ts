import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'culpa-das-estrelas',
    loadChildren: () => import('./filmes/culpa-das-estrelas/culpa-das-estrelas.module').then( m => m.CulpaDasEstrelasPageModule)
  },
  {
    path: 'sol-meia-noite',
    loadChildren: () => import('./filmes/sol-meia-noite/sol-meia-noite.module').then( m => m.SolMeiaNoitePageModule)
  },
  {
    path: 'a-cabana',
    loadChildren: () => import('./filmes/a-cabana/a-cabana.module').then( m => m.ACabanaPageModule)
  },
  {
    path: 'crepusculo',
    loadChildren: () => import('./filmes/crepusculo/crepusculo.module').then( m => m.CrepusculoPageModule)
  },
  {
    path: 'cinco-passos',
    loadChildren: () => import('./filmes/cinco-passos/cinco-passos.module').then( m => m.CincoPassosPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
