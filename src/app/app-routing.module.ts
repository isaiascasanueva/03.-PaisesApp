import { NgModule, Component } from '@angular/core'; 
import {RouterModule, Routes, RoutesRecognized} from '@angular/router';

import { PorPaisComponent } from './Paises/page/por-pais/por-pais.component';
import { PorRegionComponent } from './Paises/page/por-region/por-region.component';
import { PorCapitalComponent } from './Paises/page/por-capital/por-capital.component';
import { VerPaisComponent } from './Paises/page/ver-pais/ver-pais.component';



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
    imports:[
        RouterModule.forRoot(routes)
    ], 
    exports:[
        RouterModule,
        
    ]

})


export class AppRoutingModule{
}