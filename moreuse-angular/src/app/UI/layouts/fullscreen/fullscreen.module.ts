import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../components/register/register.component';



@NgModule({
  declarations: [
    FullscreenComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FullscreenModule { }
