import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', pathMatch: 'full' , redirectTo:'login'
  },
  {
    path:'login',component:LoginComponent
  }
]

@NgModule({
  declarations: [
    
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModuleModule { }
