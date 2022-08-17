import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './page/por-capital/por-capital.component';
import { PorPaisComponent } from './page/por-pais/por-pais.component';
import { PorRegionComponent } from './page/por-region/por-region.component';
import { VerPaisComponent } from './page/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PaisesModule { }
