import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full' , redirectTo:'login'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'sign-up' , component:SignupComponent
  },
  {  path: '',
  loadChildren: () => import('../routed-components/routed-components.module').then(m => m.RoutedComponentsModule)
}
]

@NgModule({
  declarations: [
    
    LoginComponent,
         SignupComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModuleModule { }
