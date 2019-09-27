import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UserRoutingModule } from './user-routing';



@NgModule({
  declarations: [routedComponents],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule { }
