import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { PlanosComponent } from './planos/planos.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    CarrosselComponent,
    MenuComponent,
    PlanosComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  exports: [
    MenuComponent,
    CarrosselComponent,
    PlanosComponent,
    MapaComponent
  ]
})
export class LayoutModule { }
