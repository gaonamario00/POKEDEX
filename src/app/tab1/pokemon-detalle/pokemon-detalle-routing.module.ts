import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetallePage } from './pokemon-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetallePageRoutingModule {}
