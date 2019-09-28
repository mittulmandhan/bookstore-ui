import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, AdminRoutingModule } from './admin-routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/primeng';

@NgModule({
  declarations: [routedComponents],
  imports: [
    AdminRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule

  ]
})
export class AdminModule { }
