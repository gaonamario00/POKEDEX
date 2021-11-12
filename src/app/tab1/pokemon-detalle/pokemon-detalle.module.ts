import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetallePageRoutingModule } from './pokemon-detalle-routing.module';

import { PokemonDetallePage } from './pokemon-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetallePageRoutingModule
  ],
  declarations: [PokemonDetallePage]
})
export class PokemonDetallePageModule {}
