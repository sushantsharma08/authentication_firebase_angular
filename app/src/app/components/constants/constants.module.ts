import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:StructureComponent, children:[
  { path: '',loadChildren: () => import('../routed-components/routed-components.module').then(m => m.RoutedComponentsModule)
}
    ]
  }
]


@NgModule({
  declarations: [
    StructureComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ConstantsModule { }


