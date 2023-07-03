import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { DefaultComponent } from './default.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactusComponent } from '../../components/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
