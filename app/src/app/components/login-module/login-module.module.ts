import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {
    path: '', pathMatch: 'full' , redirectTo:'login'
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'sign-up' , component:SignupComponent
  },
  {  path: 'home',
  loadChildren: () => import('../constants/constants.module').then(m => m.ConstantsModule), canActivate:[AuthGuard]
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
