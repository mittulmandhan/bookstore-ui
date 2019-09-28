import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routedComponents, PublicRoutingModule } from './public-routing';
import { HttpClientModule } from '@angular/common/http';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';



@NgModule({
  declarations: [routedComponents, UnauthorizeComponent],
  imports: [
    PublicRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
