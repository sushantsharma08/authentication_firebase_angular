import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
    StructureComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ConstantsModule { }


