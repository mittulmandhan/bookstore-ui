import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routedComponents, PublicRoutingModule } from './public-routing';
import { HttpClientModule } from '@angular/common/http';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [routedComponents, UnauthorizeComponent, CartComponent],
  imports: [
    PublicRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
