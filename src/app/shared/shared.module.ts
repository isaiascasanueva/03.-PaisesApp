import { NgModule } from '@angular/core';
import {RouterModule, Routes, RoutesRecognized} from '@angular/router';

import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PorPaisComponent } from '../Paises/page/por-pais/por-pais.component';


import { PorRegionComponent } from '../Paises/page/por-region/por-region.component';
import { PorCapitalComponent } from '../Paises/page/por-capital/por-capital.component';
import { VerPaisComponent } from '../Paises/page/ver-pais/ver-pais.component';

const routes : Routes = [{
    path:'',
    component:PorPaisComponent, 
    pathMatch:'full'
},

{
    path:'Region',
    component:PorRegionComponent, 
    pathMatch:'full'
},
{
    path:'Capital',
    component:PorCapitalComponent, 
    pathMatch:'full'
},

{
    path:'Pais/:id',
    component:VerPaisComponent, 
    

},{
    path:'**',
    redirectTo:''

}
]


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [  
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SharedModule { }
