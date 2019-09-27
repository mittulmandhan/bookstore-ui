import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, AdminRoutingModule } from './admin-routing';



@NgModule({
  declarations: [routedComponents],
  imports: [
    AdminRoutingModule,
    CommonModule

  ]
})
export class AdminModule { }
