import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, PublicRoutingModule } from './public-routing';



@NgModule({
  declarations: [routedComponents],
  imports: [
    PublicRoutingModule,
    CommonModule
  ]
})
export class PublicModule { }
